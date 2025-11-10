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
    </div>
  );
}

export default LandingPage;
