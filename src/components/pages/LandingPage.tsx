import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

function LandingPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/jobs");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="landing-page">
      <img src="/assets/05.png" alt="JobChaser" className="landing-page__image" />
      <div className="landing-links">
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
      </div>
    </div>
  );
}

export default LandingPage;
