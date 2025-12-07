import React, { useEffect, useState } from "react";
import BikeCard from "./BikeCard";
import axios from "axios";

export default function BikeGrid({ filterType }) {
  const [bikes, setBikes] = useState([]);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getBikeList();
  }, []);

  const getBikeList = async () => {
    try {
      const response = await axios.get(
        "https://starmotorsbackend.onrender.com/bike/getall"
      );

      const formatted = response.data.data.map((b) => ({
        id: b._id,
        name: `${b.brand} ${b.model}`,
        offerPrice: b.offerPrice,
        price: b.price,
        km: b.kmsDriven,
        owner: `${b.ownerCount} Owner`,
        year: b.registrationYear,
        location: b.city,
        img: b.images || "",
        singleImg: b.images[0] || "",
        engine: b.engine,
        rctransfer: b.rctransfer,
        fuel: b.fuel,
        keyfeatures: b.keyfeatures,
        insurance: b.insurance,
        biketype: b.biketype,
      }));

      setBikes(formatted);
    } catch (err) {
      console.log("API Error: ", err);
    }
  };

  useEffect(() => {
    if (!filterType || filterType == "all") {
      setFiltered(bikes);
    } else {
      setFiltered(bikes.filter((b) => b.biketype === filterType));
    }
  }, [filterType, bikes]);

  return (
    <div style={styles.grid}>
      {filtered.map((b, i) => (
        <BikeCard key={i} data={b} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    justifyContent: "start",
    alignItems: "start",
    marginTop: 20,
  },
  "@media(max-width: 768px)": {
    container: {
      position: "fixed",
      left: 0,
      top: 0,
      height: "100%",
      width: "75%",
      maxWidth: 260,
      background: "#fff",
      padding: 20,
      zIndex: 20,
      transform: "translateX(-100%)",
      transition: "transform 0.3s ease",
    },

    drawerOpen: {
      transform: "translateX(0%)",
    },

    drawerClosed: {
      transform: "translateX(-100%)",
    },

    mobileBtn: {
      display: "block",
      padding: "10px 15px",
      background: "#000",
      color: "#fff",
      borderRadius: 6,
      border: "none",
      marginBottom: 15,
    },
  },
};
