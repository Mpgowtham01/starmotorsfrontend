import { useState } from "react";
import Navbar from "./Navbar";
import BikeGrid from "./BikeGrid";
import Filters from "./Filters";
import Footer from "./Footer";

export default function Home() {
  const [filterType, setFilterType] = useState("");

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <div style={styles.layout}>
        {/* LEFT: FILTERS */}
        <Filters setFilterType={setFilterType} />

        {/* RIGHT: BIKE GRID */}
        <div style={styles.rightSection}>
          <h2 style={styles.heading}>Used Motorcycles in Cumbum</h2>

          <BikeGrid filterType={filterType} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ------------------- STYLES ------------------- */
const styles = {
  app: {
    fontFamily: "Inter, sans-serif",
  },

  layout: {
    display: "flex",
    gap: 20,
    padding: "20px 20px 40px 20px",
  },

  rightSection: {
    flex: 1,
  },

  heading: {
    marginBottom: 10,
  },

  /* ------- MEDIA QUERIES ------- */
  "@media(max-width: 1024px)": {
    layout: {
      padding: "15px",
    },
  },

  "@media(max-width: 768px)": {
    layout: {
      flexDirection: "column", // STACKS FILTER & GRID
      padding: "10px",
    },

    rightSection: {
      width: "100%",
      padding: "0",
    },

    heading: {
      fontSize: 18,
      marginLeft: 5,
    },
  },

  "@media(max-width: 480px)": {
    layout: {
      padding: "5px",
    },

    heading: {
      fontSize: 16,
    },
  },
};
