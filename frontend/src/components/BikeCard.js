import React from "react";
import { useNavigate } from "react-router-dom";

export default function BikeCard({ data }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/bike-details", { state: data });
  };

  return (
    <div style={styles.card} onClick={goToDetails}>
      <div style={styles.imgBox}>
        <img src={data.singleImg} alt={data.name} style={styles.img} />
      </div>

      <div style={styles.body}>
        <h3 style={styles.title}>{data.name}</h3>

        <p style={styles.meta}>
          {data.km} kms • {data.owner} • {data.year}
        </p>

        <div style={styles.priceBox}>
          <span style={styles.offerPrice}>₹ {data.offerPrice}</span>
          <span style={styles.actualPrice}>₹ {data.price}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: 14,
    boxShadow: "0px 4px 15px rgba(0,0,0,0.07)",
    overflow: "hidden",
    cursor: "pointer",
  },
  imgBox: {
    height: 200,
    background: "#fafafa",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  body: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  meta: {
    color: "#666",
    fontSize: 14,
    marginTop: 5,
  },
  priceBox: {
    marginTop: 10,
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  offerPrice: {
    fontSize: 22,
    fontWeight: 700,
    color: "#D90429",
  },
  actualPrice: {
    fontSize: 16,
    color: "#777",
    textDecoration: "line-through",
  },
};
