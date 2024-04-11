import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import JobCard from '../jobcard';

type Job = {
    id: string;
    postedAt: string;
    logo: string;
    position: string;
    company: string;
    contract: string;
    level: string;
    role: string;
    location: string;
    languages: string[];
    tools: string[];
};

function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        filterJobs(e.target.value);
    };

    const filterJobs = (searchTerm: string) => {
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
        </main>
    );
}

export default Jobs;
