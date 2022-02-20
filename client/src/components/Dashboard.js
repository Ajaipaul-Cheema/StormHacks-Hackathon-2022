import { Navigate, Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            { localStorage.getItem("token") ? "yes" : <Navigate to="/auth">Click to Login/Sign Up</Navigate> }
        </div>
    )
}