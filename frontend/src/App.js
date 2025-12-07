import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./components/Home";
import BikeDetailsPage from "./components/BikeDetailsPage";
import AdminBikePanel from "./components/Admin/AdminBikePanel";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bike" element={<Home />} />
        <Route path="/bike-details" element={<BikeDetailsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* 🔒 Admin protected route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminBikePanel />
            </ProtectedRoute>
          }
        />

        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
