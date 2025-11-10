import React, { useState, useEffect, useMemo } from 'react';
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
} from '../slices/jobFilterSlice';
import { RootState } from '../types/Types';
import Loading from '../Loading';

function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchTerm = useSelector((state: RootState) => state.jobFilter.searchTerm);
  const filterFullTime = useSelector((state: RootState) => state.jobFilter.filterFullTime);
  const filterRemote = useSelector((state: RootState) => state.jobFilter.filterRemote);
  const filterUSA = useSelector((state: RootState) => state.jobFilter.filterUSA);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('/data/data.json');
        setJobs(response.data.jobs || []);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // Search term filter
      if (searchTerm) {
        const searchString = `${job.position} ${job.company} ${job.contract} ${job.location} ${job.level} ${job.languages?.join(' ') || ''} ${job.tools?.join(' ') || ''}`;
        if (!searchString.toLowerCase().includes(searchTerm.toLowerCase())) {
          return false;
        }
      }

      // Filter logic: if any filters are active, job must match at least one
      if (filterFullTime || filterRemote || filterUSA) {
        let matchesFilter = false;
        
        if (filterFullTime && job.contract === 'Full Time') {
          matchesFilter = true;
        }
        if (filterRemote && job.location.toLowerCase().includes('remote')) {
          matchesFilter = true;
        }
        if (filterUSA && job.location.toLowerCase().includes('usa')) {
          matchesFilter = true;
        }
        
        if (!matchesFilter) {
          return false;
        }
      }

      return true;
    });
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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <main>
        <div className="error-msg error-msg--center">
          {error}
        </div>
      </main>
    );
  }

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
          <button 
            type='button' 
            className={`filter-btn ${filterFullTime ? 'filter-btn--active' : ''}`}
            onClick={() => toggleFilter('FullTime')}
            {...(filterFullTime && { 'aria-pressed': true })}
          >
            Full-Time
          </button>
          <button 
            type='button' 
            className={`filter-btn ${filterRemote ? 'filter-btn--active' : ''}`}
            onClick={() => toggleFilter('Remote')}
            {...(filterRemote && { 'aria-pressed': true })}
          >
            Remote
          </button>
          <button 
            type='button' 
            className={`filter-btn ${filterUSA ? 'filter-btn--active' : ''}`}
            onClick={() => toggleFilter('USA')}
            {...(filterUSA && { 'aria-pressed': true })}
          >
            USA
          </button>
          <button 
            type='button' 
            className='filter-btn' 
            onClick={handleClearFilters}
          >
            Clear Filters
          </button> 
        </div>
      </div>
      <div className="jobs">
        {filteredJobs.length === 0 ? (
          <p className='font-regular error-msg'>
            {searchTerm || filterFullTime || filterRemote || filterUSA
              ? 'Unfortunately no jobs matched your search...'
              : 'No jobs available at the moment.'}
          </p>
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
              languages={job.languages || []}
              tools={job.tools || []}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Jobs;
