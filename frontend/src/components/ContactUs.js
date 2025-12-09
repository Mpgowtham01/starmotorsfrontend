import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Css/ContactUs.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return toast.error("Name is required");
    if (!form.email.trim()) return toast.error("Email is required");
    if (!form.message.trim()) return toast.error("Message is required");
    return true;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validate()) return;

  //   const res = await fetch("http://localhost:8080/bike/send-message", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });

  //   const data = await res.json();

  //   if (data.success) {
  //     toast.success("Message sent successfully!");
  //     setForm({ name: "", email: "", message: "" });
  //   } else {
  //     toast.error("Something went wrong!");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: { name: "Star Motors", email: "mpgowtham1902@gmail.com" },
          replyTo: { email: form.email, name: form.name },

          to: [{ email: "mpgowtham01@gmail.com", name: "Star Motors Admin" }],

          subject: "New Contact Us Message - Star Motors",
          htmlContent: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${form.name}</p>
          <p><b>Email:</b> ${form.email}</p>
          <p><b>Message:</b> ${form.message}</p>
          <br/>
          <p><b>Important:</b> Please Contact this Customer</p>
        
        `,
        },
        {
          headers: {
            "api-key":
              "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",
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    }
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <ToastContainer position="top-center" />

      <div className="contact-wrapper">
        {/* Left */}
        <div className="contact-card left-card">
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-subtext">
            We're here to help and answer any questions you may have.
          </p>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 80983 22773</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>support@starmotors.com</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Cumbum, Theni, Tamil Nadu</span>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-card right-card" onSubmit={handleSubmit}>
          <h2 className="form-title">Send Us a Message</h2>

          <div className="floating-group">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Your Name</label>
          </div>

          <div className="floating-group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Your Email</label>
          </div>

          <div className="floating-group">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <label>Your Message</label>
          </div>

          <button className="submit-btn">Send Message</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
