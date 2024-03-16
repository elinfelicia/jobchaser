import { useState, useEffect } from 'react';
import Header from './components/header';
import JobCard from './components/jobcard';
import './styles/index.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setJobs(data.jobs);
        setFilteredJobs(data.jobs); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (searchTerm) => {
    if (!searchTerm) {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(job =>
        job.position.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };


  return (
    <div>
      <Header onSearch={handleSearchChange} />
      <main>
        {filteredJobs.map((job) => (
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
        ))}
      </main>
    </div>
  );
}

export default App;
