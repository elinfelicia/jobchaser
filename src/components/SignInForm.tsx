import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { SignInFormData } from "./types/SignInFormData";
import { FirebaseError } from "firebase/app";

function SignInForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const getErrorMessage = (error: FirebaseError): string => {
    switch (error.code) {
      case "auth/user-not-found":
        return "No account found with this email address.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/network-request-failed":
        return "Network error. Please check your connection.";
      default:
        return "Failed to sign in. Please try again.";
    }
  };

  const formSubmit = async (data: SignInFormData) => {
    try {
      setError("");
      setLoading(true);
      await signIn(data.email, data.password);
      navigate("/jobs");
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(getErrorMessage(err));
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit(formSubmit)} className="auth-form">
        <h2 className="auth-form__title">Sign In</h2>

        {error && <div className="auth-form__error">{error}</div>}

        <div className="auth-form__field">
          <label htmlFor="email" className="auth-form__label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="auth-form__input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            disabled={loading}
          />
          {errors.email && (
            <span className="auth-form__field-error">{errors.email.message}</span>
          )}
        </div>

        <div className="auth-form__field">
          <label htmlFor="password" className="auth-form__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="auth-form__input"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            disabled={loading}
          />
          {errors.password && (
            <span className="auth-form__field-error">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="auth-form__button"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="auth-form__footer">
          Don't have an account?{" "}
          <Link to="/signup" className="auth-form__link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
