import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../SignInForm";
import Loading from "../Loading";
import { useAuth } from "../context/AuthContext";

function SignInPage() {
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

  return <SignInForm />;
}

export default SignInPage;
