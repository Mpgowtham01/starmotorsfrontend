import React from "react";
import "../components/Css/Footer.css";

export default function Footer() {
  const quickLinks1 = ["Buy Bike", "Sell Bike", "About Us", "Contact Us"];

  const registeredAddress = [
    "Star Motors",
    "CIN: U63040TZ2020PTC033680",
    "484, Kamaraj Road, Cumbum,",
    "Theni, 625 516",
    "Email: support@gmail.com",
  ];

  return (
    <footer className="footer-container">
      {/* LEFT */}
      <div className="footer-column">
        <div className="footer-rowBetween">
          <h1 className="footer-logo">Star Motors</h1>
          <button className="footer-callBtn"> +917666376661</button>
        </div>

        <p className="footer-text">
          We're committed to creating a technology-driven trustable ecosystem to
          sell two-wheelers and buy top-quality refurbished two-wheelers while
          making the process quick, easy and hassle-free.
        </p>

        <div className="footer-socialRow">
          <span>📘</span>
          <span>🐦</span>
          <span>💼</span>
          <span>📷</span>
          <span>▶️</span>
          <span>🟢</span>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="footer-column">
        <h3 className="footer-heading">Quick Links</h3>
        {quickLinks1.map((item, i) => (
          <span key={i} className="footer-link">
            {item}
          </span>
        ))}
      </div>

      {/* ADDRESS */}
      <div className="footer-column">
        <h3 className="footer-heading">Registered Address</h3>
        {registeredAddress.map((item, i) => (
          <span key={i} className="footer-text">
            {item}
          </span>
        ))}
      </div>

      <div className="footer-copyRow">
        ©2025 Star Motors. All rights reserved.
      </div>
    </footer>
  );
}
