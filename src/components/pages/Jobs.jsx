import JobCard from '../jobcard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
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
  
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        filterJobs(e.target.value);
    };

    const filterJobs = (searchTerm) => {
        if (!searchTerm) {
            setFilteredJobs(jobs);
        } else {
            const filtered = jobs.filter(job => {
                const searchString = `${job.position} ${job.company} ${job.contract} ${job.location} ${job.level} ${job.languages.join(' ')} ${job.tools.join(' ')}`;
                return searchString.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredJobs(filtered);
        }
    };

    return (
        <main>
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
            {filteredJobs.length === 0 ? (
                <p className='font-regular error-msg'>Unfortunately no jobs matched your search...</p>
            ) : (
                filteredJobs.map((job) => (
                    <JobCard 
                        key={job.id}
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
        </main>
    );
}

export default Jobs;
