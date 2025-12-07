import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      const res = await axios.post(
        "https://starmotorsbackend.onrender.com/signup/login",
        form
      );
      console.log("Login Success:", res.data);

      localStorage.setItem("staremail", res.data.data.email);
      navigate("/admin");
      setError("");
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="new-login-container">
      <div className="new-login-card">
        <h2 className="new-login-title">Admin Login</h2>

        {error && <p className="new-error-text">{error}</p>}

        <form onSubmit={handleSubmit} className="new-form-container">
          {/* Email Input */}
          <div className="floating-group">
            {/* <FiMail className="floating-icon" /> */}
            <input type="email" name="email" onChange={handleChange} required />
            <label>Email Address</label>
          </div>

          {/* Password Input */}
          <div className="floating-group">
            {/* <FiLock className="floating-icon" /> */}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              required
            />
            <label>Password</label>

            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* Button */}
          <button type="submit" className="new-login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
