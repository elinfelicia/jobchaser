/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header>
      <div className="headers">
        <h4 className='subheading font-bold'>welcome to</h4>
        <h1 className='heading font-bold'>JOBCHASER</h1>
      </div>
      <div className='searchbar'>
        <input 
          type="text" 
          className='searchbar-input font-thin' 
          placeholder='Find your dream job...'
          value={searchTerm}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar-icon' />
      </div>
    </header>
  );
}

export default Header;
