import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import SellBikeModal from "./SellBikeModal";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showSellModal, setShowSellModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSubmit = () => {
    localStorage.clear();
    navigate("/adminlogin");
  };

  return (
    <div style={styles.wrapper}>
      {/* -------- Navbar -------- */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          {/* Logo */}
          <div style={styles.logo} onClick={() => navigate("/")}>
            <div>
              <h1 style={styles.logoText}>Star Motors</h1>
              <p style={styles.logoTagline}>Premium Two-Wheelers</p>
            </div>
          </div>

          {/* Desktop Menu (hide on mobile) */}
          {!isMobile && (
            <div style={styles.desktopMenu}>
              <span style={styles.menuItem} onClick={() => handleSubmit()}>
                Logout
              </span>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={styles.mobileMenuBtn}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <div
              style={styles.mobileMenuItem}
              onClick={() => navigate("/bike")}
            >
              Logout
            </div>
          </div>
        )}

        <SellBikeModal
          show={showSellModal}
          close={() => setShowSellModal(false)}
        />
      </nav>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    background: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  topBar: {
    background: "linear-gradient(135deg, #1f1f1f, #2c2c2c)",
    color: "#fff",
    fontSize: "13px",
  },

  topBarContent: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "8px 24px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
  },

  topBarLeft: {
    display: "flex",
    gap: "20px",
  },

  topBarItem: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },

  topBarRight: {
    display: "flex",
  },

  navbar: { background: "#fff" },

  navContent: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    cursor: "pointer",
  },

  logoIcon: { fontSize: "30px" },

  logoText: { margin: 0, fontSize: "22px", fontWeight: "800" },

  logoTagline: {
    margin: 0,
    fontSize: "11px",
    color: "#ff6b00",
  },

  desktopMenu: {
    display: "flex",
    gap: "32px",
  },

  menuItem: {
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: 500,
  },

  mobileMenuBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },

  mobileMenu: {
    background: "#f9f9f9",
    padding: "16px 24px",
  },

  mobileMenuItem: {
    padding: "12px 0",
    borderBottom: "1px solid #ddd",
    fontSize: "16px",
  },
};
