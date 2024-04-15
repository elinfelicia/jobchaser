import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useForm } from "react-hook-form";
function SignUpForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const formSubmit = (data) => {
        console.log("Form submitted", data);
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
            navigate("/signin");
        })
            .catch((error) => {
            console.error("Error creating user", error);
        });
    };
    return (_jsxs("form", { onSubmit: handleSubmit(formSubmit), children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Email:" }), _jsx("input", { id: "email", type: "email", ...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        }) }), errors.email && _jsx("span", { children: errors.email.message })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", children: "Password:" }), _jsx("input", { id: "password", type: "password", ...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        }) }), errors.password && _jsx("span", { children: errors.password.message })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "confirmPassword", children: "Confirm Password:" }), _jsx("input", { id: "confirmPassword", type: "password", ...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        }) }), errors.confirmPassword && (_jsx("span", { children: errors.confirmPassword.message }))] }), _jsx("button", { type: "submit", children: "Register" }), _jsx(Link, { to: "/signin", children: "Already have an account? Sign In" })] }));
}
export default SignUpForm;
