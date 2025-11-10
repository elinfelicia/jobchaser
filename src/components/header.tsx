import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function Header() {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <header className="site-header">
      <div className="header__inner">
        <div className="headers">
          <h4 className="subheading font-bold">welcome to</h4>
          <Link to="/">
            <h1 className="heading font-bold">JOBCHASER</h1>
          </Link>
        </div>

        {!loading && (
          <nav className="header__actions" aria-label="Authentication">
            {user ? (
              <>
                <span className="header__greeting">
                  {user.email ?? "Signed in"}
                </span>
                <button
                  className="header__button header__button--primary"
                  type="button"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  className="header__button header__button--ghost"
                  to="/signin"
                >
                  Sign in
                </Link>
                <Link
                  className="header__button header__button--primary"
                  to="/signup"
                >
                  Create account
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
