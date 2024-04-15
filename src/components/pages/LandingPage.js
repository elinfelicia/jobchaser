import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
function LandingPage() {
    return (_jsxs(_Fragment, { children: [_jsx("img", { src: "public/assets/05.png", alt: "" }), _jsxs("div", { className: "landing-links", children: [_jsx(Link, { to: "/signup", className: "nav-link", children: "Sign Up" }), _jsx(Link, { to: "/signin", className: "nav-link", children: "Sign In" })] })] }));
}
export default LandingPage;
