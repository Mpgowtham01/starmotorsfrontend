import React, { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

export default function Filters() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setOpen(!open)}
        className="mobile-filter-btn"
        style={styles.mobileBtn}
      >
        <FiFilter size={20} /> Filters
      </button>

      {/* Sidebar / Drawer */}
      <div
        style={{
          ...styles.container,
          ...(open ? styles.drawerOpen : styles.drawerClosed),
        }}
        className="filters-box"
      >
        <h4>Bike Type</h4>

        <div style={styles.cardActive}>
          <FaMotorcycle size={22} />
          <span style={styles.label}>Motorcycle</span>
          <span style={styles.count}>1419</span>
        </div>

        <div style={styles.cardInactive}>
          <FaMotorcycle size={20} />
          <span style={styles.label}>Scooter</span>
          <span style={styles.count}>417</span>
        </div>
      </div>
    </>
  );
}

const styles = {
  mobileBtn: {
    display: "none",
    padding: "10px 15px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    margin: "10px 0",
  },

  container: {
    width: 260,
    padding: 20,
    borderRight: "1px solid #eee",
    background: "#fff",
  },

  drawerOpen: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    zIndex: 10,
    display: "block",
  },

  drawerClosed: {
    display: "block",
  },

  cardActive: {
    background: "#FFE4CC",
    borderRadius: 10,
    padding: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    cursor: "pointer",
  },

  cardInactive: {
    background: "#F2F2F2",
    borderRadius: 10,
    padding: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    cursor: "pointer",
  },

  label: { marginLeft: 10, flex: 1 },
  count: { fontWeight: 700 },
};
