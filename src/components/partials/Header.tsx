import { Link, useLocation } from 'react-router-dom';
import '../../css/header.css';

export function Header() {
    const location = useLocation();

    return (
        <div className="header-container">
            <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
                <span>Dashboard</span>
            </Link>
            <Link to="/createStudent" className={location.pathname === "/createStudent" ? "active" : ""}>
                <span>Create Student</span>
            </Link>
            <Link to="/log-out" className={location.pathname === "/log-out" ? "active" : ""}>
                <span>Log out</span>
            </Link>
        </div>
    );
}
