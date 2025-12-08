import React, { useState } from "react";
import "../components/Css/Footer.css";
import { useNavigate } from "react-router-dom";
import SellBikeModal from "./SellBikeModal";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const [showSellModal, setShowSellModal] = useState(false);

  const registeredAddress = [
    "Star Motors",
    "CIN: U63040TZ2020PTC033680",
    "484, Kamaraj Road, Cumbum,",
    "Theni, 625 516",
    "Email: support@starmotors.com",
  ];

  const navigate = useNavigate();

  return (
    <footer className="footer-container">
      {/* LEFT */}
      <div className="footer-column">
        <div className="footer-rowBetween">
          <h1 className="footer-logo">Star Motors</h1>
          <button className="footer-callBtn"> +918098322773</button>
        </div>

        <p className="footer-text">
          We're committed to creating a technology-driven trustable ecosystem to
          sell two-wheelers and buy top-quality refurbished two-wheelers while
          making the process quick, easy and hassle-free.
        </p>

        <div className="footer-socialRow">
          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="footer-column">
        <h3 className="footer-heading">Quick Links</h3>

        <span className="footer-link" onClick={() => navigate("/bike")}>
          Buy Bike
        </span>
        <span
          className="footer-link"
          onClick={() => {
            setShowSellModal(true);
          }}
        >
          Sell Bike
        </span>
        <span className="footer-link" onClick={() => navigate("/aboutus")}>
          About Us
        </span>
        <span className="footer-link" onClick={() => navigate("/contactus")}>
          Contact Us
        </span>
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

      <SellBikeModal
        show={showSellModal}
        close={() => setShowSellModal(false)}
      />
    </footer>
  );
}
