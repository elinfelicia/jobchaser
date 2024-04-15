import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import LandingPage from './components/pages/LandingPage';
import Jobs from './components/pages/Jobs';
import { AuthContext } from './components/context/AuthContext';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './components/store'; // Import your Redux store
import './styles/index.css';
function ProtectedRoute() {
    const authContext = useContext(AuthContext);
    const isAuthenticated = authContext && authContext.name !== null;
    console.log("isAuthenticated", isAuthenticated);
    return isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/signin", replace: true });
}
function App() {
    return (_jsx(Provider, { store: store, children: _jsxs(BrowserRouter, { children: [_jsx(Header, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUpPage, {}) }), _jsx(Route, { path: "/signin", element: _jsx(SignInPage, {}) }), _jsx(Route, { path: "/jobs", element: _jsx(ProtectedRoute, {}), children: _jsx(Route, { path: "/jobs", element: _jsx(Jobs, {}) }) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
