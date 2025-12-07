import React from "react";
import {
  FaHandshake,
  FaMotorcycle,
  FaUsers,
  FaTools,
  FaThumbsUp,
  FaRupeeSign,
} from "react-icons/fa";
import "./Css/AboutUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>About Star Motors</h1>
          <p>Your trusted marketplace for second-hand bikes.</p>
        </div>

        {/* Who We Are */}
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            At Star Motors, we make buying and selling second-hand bikes simple,
            transparent, and trustworthy. With years of experience in the
            two-wheeler market, we bring you carefully inspected bikes at
            unbeatable prices. Our goal is to ensure that every customer enjoys
            a smooth and hassle-free experience.
          </p>
        </div>

        {/* Our Mission & Vision */}
        <div className="mission-section">
          <h2>Our Mission & Vision</h2>
          <p>
            Our mission is to make quality pre-owned bikes accessible and
            affordable for everyone. We aim to build a marketplace where trust
            and transparency come first.
          </p>
          <p>
            Our vision is to become India’s leading second-hand bike platform
            known for reliability, quality assurance, and customer satisfaction.
          </p>
        </div>

        {/* Cards Section */}
        <div className="about-cards">
          <div className="about-card">
            <FaMotorcycle className="about-icon" />
            <h3>Quality Bikes</h3>
            <p>Every bike is inspected and verified for top-notch condition.</p>
          </div>

          <div className="about-card">
            <FaHandshake className="about-icon" />
            <h3>Trusted Service</h3>
            <p>
              We ensure honest pricing and reliable support for all customers.
            </p>
          </div>

          <div className="about-card">
            <FaUsers className="about-icon" />
            <h3>Customer First</h3>
            <p>Your satisfaction is our priority — always!</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="choose-section">
          <h2>Why Choose Star Motors?</h2>

          <div className="choose-grid">
            <div className="choose-card">
              <FaTools className="choose-icon" />
              <h3>Full Bike Inspection</h3>
              <p>
                Each vehicle undergoes a complete mechanical and performance
                check.
              </p>
            </div>

            <div className="choose-card">
              <FaThumbsUp className="choose-icon" />
              <h3>Verified Sellers</h3>
              <p>
                We allow only genuine bike owners and verified sellers to list
                with us.
              </p>
            </div>

            <div className="choose-card">
              <FaRupeeSign className="choose-icon" />
              <h3>Affordable Pricing</h3>
              <p>We offer competitive prices with no hidden charges—ever.</p>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="process-section">
          <h2>How We Work</h2>
          <ol>
            <li>
              <strong>Inspection:</strong> Every bike is checked for
              performance, engine health, and exterior condition.
            </li>
            <li>
              <strong>Verification:</strong> Ownership and documents are
              verified for customer safety.
            </li>
            <li>
              <strong>Listing:</strong> Verified bikes are listed with accurate
              details and real photos.
            </li>
            <li>
              <strong>Transparent Purchase:</strong> Customers get complete
              clarity on pricing and bike history.
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
}
