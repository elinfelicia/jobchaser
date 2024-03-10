import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
      <header>
        <h4 className='subheading font-bold'>welcome to</h4>
        <h1 className='heading font-bold'>JOBCHASER</h1>
        <div className='searchbar'>
          <input type="text" className='searchbar-input font-thin' placeholder='Find your dream job...' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar-icon' />
        </div>
      </header>
    )
  }

  export default Header