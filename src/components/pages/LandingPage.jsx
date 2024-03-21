import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <>
            <img src="public/assets/05.png" alt="" />
            <div className="landing-links">
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </div>

        </>
    )
}
export default LandingPage