/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header>
      <div className="headers">
        <h4 className='subheading font-bold'>Welcome to</h4>
        <h1 className='heading font-bold'>JOBCHASER</h1>
      </div>
      <div className='searchbar'>
        <input
          type="text"
          className='searchbar-input font-thin'
          placeholder='Find your dream job...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <FontAwesomeIcon icon={faSearch} className='searchbar-icon' />
      </div>
    </header>
  );
}

export default Header;
