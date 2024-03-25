import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <>
            <img src="public/assets/05.png" alt="" />
            <div className="landing-links">
                <Link to="/signup" className="nav-link">Sign Up</Link>
                <Link to="/signin" className="nav-link">Sign In</Link>
            </div>

        </>
    )
}
export default LandingPage