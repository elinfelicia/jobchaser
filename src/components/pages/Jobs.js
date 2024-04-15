import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import JobCard from '../jobcard';
import { setSearchTerm, toggleFilterFullTime, toggleFilterRemote, toggleFilterUSA, clearFilters } from '../slices/jobFilterSlice';
function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const searchTerm = useSelector((state) => state.jobFilter.searchTerm);
    const filterFullTime = useSelector((state) => state.jobFilter.filterFullTime);
    const filterRemote = useSelector((state) => state.jobFilter.filterRemote);
    const filterUSA = useSelector((state) => state.jobFilter.filterUSA);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/data.json');
                setJobs(response.data.jobs);
                setFilteredJobs(response.data.jobs);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        filterJobs();
    }, [jobs, searchTerm, filterFullTime, filterRemote, filterUSA]);
    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };
    const toggleFilter = (filterName) => {
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
                if (filterFullTime && job.contract === 'Full Time')
                    match = true;
                if (filterRemote && job.location.toLowerCase().includes('remote'))
                    match = true;
                if (filterUSA && job.location.toLowerCase().includes('usa'))
                    match = true;
            }
            return match;
        });
        setFilteredJobs(filtered);
    };
    return (_jsxs("main", { children: [_jsxs("div", { className: "filering", children: [_jsxs("div", { className: 'searchbar', children: [_jsx("input", { type: "text", className: 'searchbar-input font-thin', placeholder: 'Find your dream job...', value: searchTerm, onChange: handleChange }), _jsx(FontAwesomeIcon, { icon: faSearch, className: 'searchbar-icon' })] }), _jsxs("div", { className: 'filter-buttons', children: [_jsx("button", { type: 'button', className: 'filter-btn', onClick: () => toggleFilter('FullTime'), children: "Full-Time" }), _jsx("button", { type: 'button', className: 'filter-btn', onClick: () => toggleFilter('Remote'), children: "Remote" }), _jsx("button", { type: 'button', className: 'filter-btn', onClick: () => toggleFilter('USA'), children: "USA" }), _jsx("button", { type: 'button', className: 'filter-btn', onClick: handleClearFilters, children: "Clear Filters" })] })] }), _jsx("div", { className: "jobs", children: filteredJobs.length === 0 ? (_jsx("p", { className: 'font-regular error-msg', children: "Unfortunately no jobs matched your search..." })) : (filteredJobs.map((job) => (_jsx(JobCard, { id: job.id, postedAt: job.postedAt, logo: job.logo, position: job.position, company: job.company, contract: job.contract, level: job.level, role: job.role, location: job.location, languages: job.languages ? job.languages.map((language) => language) : [], tools: job.tools ? job.tools.map((tool) => tool) : [] }, job.id)))) })] }));
}
export default Jobs;
