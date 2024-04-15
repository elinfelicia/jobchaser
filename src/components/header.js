import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
function Header() {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            console.log("Signed out successfully!");
        }).catch((error) => {
            console.error("Error signing out", error);
        });
    };
    return (_jsxs("header", { children: [_jsxs("div", { className: "headers", children: [_jsx("h4", { className: 'subheading font-bold', children: "welcome to" }), _jsx(Link, { to: "/", children: _jsx("h1", { className: 'heading font-bold', children: "JOBCHASER" }) })] }), _jsx("button", { type: "button", onClick: handleSignOut, children: "Sign Out" })] }));
}
export default Header;
