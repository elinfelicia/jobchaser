import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
function SignInForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formSubmit = (data) => {
        console.log("Form Submitted: ", data);
        const { email, password } = data;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log("user signed in:", user);
            navigate("/jobs");
        })
            .catch((error) => {
            console.error("Error logging in user", error);
        });
    };
    return (_jsxs(_Fragment, { children: [_jsxs("form", { onSubmit: handleSubmit(formSubmit), children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Email:" }), _jsx("input", { id: "email", type: "email", ...register("email", {
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
                                }) }), errors.password && _jsx("span", { children: errors.password.message })] }), _jsx("button", { type: "submit", children: "Log in" })] }), _jsx(Link, { to: "/signup", children: "Don't have an account? Sign Up" })] }));
}
export default SignInForm;
