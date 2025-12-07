// import React, { useState } from "react";
// import { FaMotorcycle } from "react-icons/fa";
// import { FiFilter } from "react-icons/fi";

// export default function Filters({ setFilterType }) {
//   const [open, setOpen] = useState(false);

//   const selectFilter = (type) => {
//     setFilterType(type);
//   };

//   return (
//     <>
//       <button
//         onClick={() => setOpen(!open)}
//         className="mobile-filter-btn"
//         style={styles.mobileBtn}
//       >
//         <FiFilter size={20} /> Filters
//       </button>
//       <div
//         style={{
//           ...styles.container,
//           ...(open ? styles.drawerOpen : styles.drawerClosed),
//         }}
//         className="filters-box"
//       >
//         <h4>Bike Type</h4>

//         <div
//           style={styles.cardActive}
//           onClick={() => selectFilter("motorcycle")}
//         >
//           <FaMotorcycle size={22} />
//           <span style={styles.label}>Motorcycle</span>
//           <span style={styles.count}>1419</span>
//         </div>

//         <div
//           style={styles.cardInactive}
//           onClick={() => selectFilter("scooter")}
//         >
//           <FaMotorcycle size={20} />
//           <span style={styles.label}>Scooter</span>
//           <span style={styles.count}>417</span>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   mobileBtn: {
//     display: "none",
//     padding: "10px 15px",
//     background: "#000",
//     color: "#fff",
//     border: "none",
//     borderRadius: 6,
//     margin: "10px 0",
//   },

//   container: {
//     width: 260,
//     padding: 20,
//     borderRight: "1px solid #eee",
//     background: "#fff",
//   },

//   drawerOpen: {
//     position: "fixed",
//     left: 0,
//     top: 0,
//     height: "100%",
//     zIndex: 10,
//     display: "block",
//   },

//   drawerClosed: {
//     display: "block",
//   },

//   cardActive: {
//     background: "#FFE4CC",
//     borderRadius: 10,
//     padding: 14,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: 10,
//     cursor: "pointer",
//   },

//   cardInactive: {
//     background: "#F2F2F2",
//     borderRadius: 10,
//     padding: 14,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: 10,
//     cursor: "pointer",
//   },

//   label: { marginLeft: 10, flex: 1 },
//   count: { fontWeight: 700 },
// };

import React, { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";
import { RiBikeLine } from "react-icons/ri";
import { GiScooter } from "react-icons/gi";
import { FiFilter } from "react-icons/fi";

export default function Filters({ setFilterType }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("all");

  const selectFilter = (type) => {
    setActive(type); // highlight active
    setFilterType(type); // send filter to parent
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="mobile-filter-btn"
        style={styles.mobileBtn}
      >
        <FiFilter size={20} /> Filters
      </button>

      <div
        style={{
          ...styles.container,
          ...(open ? styles.drawerOpen : styles.drawerClosed),
        }}
        className="filters-box"
      >
        <h4>Bike Type</h4>

        {/* MOTORCYCLE */}
        {/* ALL BIKES */}
        <div
          style={{
            ...styles.cardBase,
            ...(active === "all" ? styles.cardActive : styles.cardInactive),
          }}
          onClick={() => selectFilter("all")}
        >
          <RiBikeLine size={24} />
          <span style={styles.label}>All Bikes</span>
          <span style={styles.count}>890</span>
        </div>

        {/* MOTORCYCLE */}
        <div
          style={{
            ...styles.cardBase,
            ...(active === "motorcycle"
              ? styles.cardActive
              : styles.cardInactive),
          }}
          onClick={() => selectFilter("motorcycle")}
        >
          <FaMotorcycle size={24} />
          <span style={styles.label}>Motorcycle</span>
          <span style={styles.count}>1419</span>
        </div>

        {/* SCOOTER */}
        <div
          style={{
            ...styles.cardBase,
            ...(active === "scooter" ? styles.cardActive : styles.cardInactive),
          }}
          onClick={() => selectFilter("scooter")}
        >
          <GiScooter size={24} />
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
  },

  drawerClosed: {},

  /* BASE CARD STYLE */
  cardBase: {
    padding: 14,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    cursor: "pointer",
    transition: "all 0.25s ease",
    border: "1px solid transparent",
  },

  /* ACTIVE SELECTED CARD */
  cardActive: {
    background: "#fff7ec",
    border: "1.5px solid #ff8c4d",
    boxShadow: "0 4px 12px rgba(255,140,77,0.25)",
    transform: "scale(1.02)",
  },

  /* INACTIVE BUT NORMAL CARD */
  cardInactive: {
    background: "#F7F7F7",
  },

  /* HOVER EFFECT FOR ALL CARDS */
  cardBaseHover: {
    background: "#fff",
    transform: "scale(1.01)",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
  },

  label: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
  },

  count: {
    fontWeight: 700,
  },
};
