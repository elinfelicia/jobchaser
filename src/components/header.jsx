import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return (
      <header>
        <h2>welcome to</h2>
        <h1>JOBCHASER</h1>
        <div className='searchbar'>
          <input type="text" placeholder='Search for your dream job' />
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
      </header>
    )
  }

  export default Header