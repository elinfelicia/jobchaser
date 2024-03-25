
import { Link, useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import {auth} from "../firebase-config/"

function Header() {

const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      console.log("Signed out successfully!");
    }).catch((error) => {
      console.error("Error signing out", error);
    })
  }

  return (
    <header>
      <div className="headers">
        <h4 className='subheading font-bold'>welcome to</h4>
        <Link to="/">
          <h1 className='heading font-bold'>JOBCHASER</h1>
        </Link>
      </div>
      <button type="button" onClick={handleSignOut}>Sign Out</button>
      

    </header>
  );
}

export default Header;
