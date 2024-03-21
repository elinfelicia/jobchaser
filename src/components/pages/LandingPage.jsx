import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <>
            <h1>LANDING PAGE</h1>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>

        </>
    )
}
export default LandingPage