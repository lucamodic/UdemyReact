import { Routes, Route, useLocation } from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { CreateStudent } from "./components/CreateStudent";
import { Header } from "./components/partials/Header";
export function App() {
    const location = useLocation();
    const showHeader = location.pathname !== "/";

    return (
        <div>
            {showHeader && <Header />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/createStudent" element={<CreateStudent />} />
            </Routes>
        </div>
    );
}
