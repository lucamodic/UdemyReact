import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login"
import { Dashboard } from "./components/dashboard";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
