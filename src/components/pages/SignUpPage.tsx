import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../SignUpForm";
import Loading from "../Loading";
import { useAuth } from "../context/AuthContext";

function SignUpPage() {
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

  return <SignUpForm />;
}

export default SignUpPage;
