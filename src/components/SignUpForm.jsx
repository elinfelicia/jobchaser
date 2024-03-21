import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function SignUpForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const checkUser = (username) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find((user) => user.username === username);
  };

  const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  };

  const onSubmit = (data) => {
    const user = checkUser(data.email);
    if (user) {
      setError("User already exists!");
    } else {
      const userData = { username: data.email, password: data.password };
      registerUser(userData);
      alert("User registered successfully!");
      navigate("/signin")

      // ADD redirection to sign in

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match"
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>

      {error && <span>{error}</span>}
      
      <button type="submit">Register</button>
      <Link to="/signin">Already have an account? Sign In</Link>
    </form>
  );
}

export default SignUpForm;
