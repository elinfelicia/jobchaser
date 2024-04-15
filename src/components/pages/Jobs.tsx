import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import JobCard from '../jobcard';
import { Job } from '../types/Job';
import {
  setSearchTerm,
  toggleFilterFullTime,
  toggleFilterRemote,
  toggleFilterUSA,
  clearFilters
} from '../slices/jobFilterSlice'
import { RootState } from '../types/Types'; // assuming you have a RootState type defined

function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const searchTerm = useSelector((state: RootState) => state.jobFilter.searchTerm);
  const filterFullTime = useSelector((state: RootState) => state.jobFilter.filterFullTime);
  const filterRemote = useSelector((state: RootState) => state.jobFilter.filterRemote);
  const filterUSA = useSelector((state: RootState) => state.jobFilter.filterUSA);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/data.json');
        setJobs(response.data.jobs);
        setFilteredJobs(response.data.jobs); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, searchTerm, filterFullTime, filterRemote, filterUSA]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const toggleFilter = (filterName: string) => {
    switch (filterName) {
      case 'FullTime':
        dispatch(toggleFilterFullTime());
        break;
      case 'Remote':
        dispatch(toggleFilterRemote());
        break;
      case 'USA':
        dispatch(toggleFilterUSA());
        break;
      default:
        break;
    }
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const filterJobs = () => {
    let filtered = jobs.filter(job => {
      let match = true;
      if (searchTerm) {
        const searchString = `${job.position} ${job.company} ${job.contract} ${job.location} ${job.level} ${job.languages.join(' ')} ${job.tools.join(' ')}`;
        match = searchString.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (match && (filterFullTime || filterRemote || filterUSA)) {
        match = false;
        if (filterFullTime && job.contract === 'Full Time') match = true;
        if (filterRemote && job.location.toLowerCase().includes('remote')) match = true;
        if (filterUSA && job.location.toLowerCase().includes('usa')) match = true;
      }
      return match;
    });
    setFilteredJobs(filtered);
  };

  return (
    <main>
        <div className="filering">
            <div className='searchbar'>
                <input 
                type="text" 
                className='searchbar-input font-thin' 
                placeholder='Find your dream job...'
                value={searchTerm}
                onChange={handleChange}
                />
                <FontAwesomeIcon icon={faSearch} className='searchbar-icon' />
            </div>
            <div className='filter-buttons'>
                <button type='button' className='filter-btn' onClick={() => toggleFilter('FullTime')}>Full-Time</button>
                <button type='button' className='filter-btn' onClick={() => toggleFilter('Remote')}>Remote</button>
                <button type='button' className='filter-btn' onClick={() => toggleFilter('USA')}>USA</button>
                <button type='button' className='filter-btn' onClick={handleClearFilters}>Clear Filters</button> 
            </div>
        </div>
        <div className="jobs">
            {filteredJobs.length === 0 ? (
            <p className='font-regular error-msg'>Unfortunately no jobs matched your search...</p>
            ) : (
            filteredJobs.map((job) => (
            <JobCard 
                key={job.id}
                id={job.id}
                postedAt={job.postedAt}
                logo={job.logo}
                position={job.position}
                company={job.company}
                contract={job.contract}
                level={job.level}
                role={job.role}
                location={job.location}
                languages={job.languages ? job.languages.map((language) => language) : []}
                tools={job.tools ? job.tools.map((tool) => tool) : []}
            />
            ))
            )}
        </div>
    </main>
  );
}

export default Jobs;
