
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <div className="headers">
        <h4 className='subheading font-bold'>welcome to</h4>
        <Link to="/">
          <h1 className='heading font-bold'>JOBCHASER</h1>
        </Link>
      </div>

    </header>
  );
}

export default Header;
