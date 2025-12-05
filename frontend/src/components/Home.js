import { useEffect, useState } from "react";
import axios from "axios";
import BikeCard from "./BikeCard";
export default function Home() {
  return (
    <div className="app-container" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <div style={{ display: "flex", marginTop: "20px" }}>
        <Filters />
        <div style={{ flex: 1, padding: "0 20px" }}>
          <h2>
            <b>1000</b> Used Motorcycles in Cumbum
          </h2>
          <BikeGrid />
        </div>
      </div>
    </div>
  );
}
