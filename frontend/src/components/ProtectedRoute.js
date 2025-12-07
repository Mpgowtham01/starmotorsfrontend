import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const admin = localStorage.getItem("staremail");

  if (!admin) {
    return <Navigate to="/adminlogin" replace />;
  }

  return children;
}
