import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Css/ContactUs.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <div className="contact-wrapper">
        {/* Left Side */}
        <div className="contact-card left-card">
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-subtext">
            We're here to help and answer any questions you may have.
          </p>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>support@starmotors.com</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-card right-card" onSubmit={handleSubmit}>
          <h2 className="form-title">Send Us a Message</h2>

          <div className="floating-group">
            <input type="text" name="name" onChange={handleChange} required />
            <label>Your Name</label>
          </div>

          <div className="floating-group">
            <input type="email" name="email" onChange={handleChange} required />
            <label>Your Email</label>
          </div>

          <div className="floating-group">
            <textarea name="message" onChange={handleChange} required />
            <label>Your Message</label>
          </div>

          <button className="submit-btn">Send Message</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
