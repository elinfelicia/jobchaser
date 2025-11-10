import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { SignUpFormData } from "./types/SignUpFormData";
import { FirebaseError } from "firebase/app";

function SignUpForm() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const getErrorMessage = (error: FirebaseError): string => {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "An account with this email already exists.";
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled.";
      case "auth/weak-password":
        return "Password is too weak. Please use a stronger password.";
      case "auth/network-request-failed":
        return "Network error. Please check your connection.";
      default:
        return "Failed to create account. Please try again.";
    }
  };

  const formSubmit = async (data: SignUpFormData) => {
    try {
      setError("");
      setLoading(true);
      await signUp(data.email, data.password);
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
        <h2 className="auth-form__title">Create Account</h2>

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

        <div className="auth-form__field">
          <label htmlFor="confirmPassword" className="auth-form__label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="auth-form__input"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            disabled={loading}
          />
          {errors.confirmPassword && (
            <span className="auth-form__field-error">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="auth-form__button"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <p className="auth-form__footer">
          Already have an account?{" "}
          <Link to="/signin" className="auth-form__link">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
