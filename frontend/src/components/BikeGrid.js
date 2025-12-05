import React from "react";
import BikeCard from "./BikeCard";

export default function BikeGrid() {
  const bikes = [
    {
      name: "Bajaj Avenger Street 220",
      offerPrice: "79,999",
      price: "₹69,800",
      km: "38,836",
      owner: "1st Owner",
      year: "2016",
      offerText: "₹10,199 OFF Today!",
      location: "Nagarbhavi, Bangalore",
      img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?fm=jpg&q=60&w=3000",
    },
    {
      name: "Bajaj Pulsar NS 160",
      offerPrice: "79,999",
      price: "₹94,500",
      km: "15,243",
      owner: "1st Owner",
      year: "2020",
      offerText: "₹10,199 OFF Today!",
      location: "Nagarbhavi, Bangalore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJknkqvtJd9hz1linMCb5gJkw_KQmU8_qDRA&s",
    },
    {
      name: "Bajaj Pulsar 150",
      offerPrice: "79,999",
      price: "₹58,850",
      km: "29,000",
      owner: "2nd Owner",
      year: "2018",
      offerText: "₹10,199 OFF Today!",
      location: "Nagarbhavi, Bangalore",
      img: "https://images.overdrive.in/wp-content/odgallery/2022/08/63809_2022_Royal_Enfield_Hunter_350_468x263.jpg",
    },
    {
      name: "Royal Enfield Classic 350",
      price: "1,45,000",
      offerPrice: "1,36,000",
      km: "12,000",
      owner: "1st Owner",
      year: "2019",
      location: "Theni",
      img: "https://images.overdrive.in/wp-content/odgallery/2022/08/63809_2022_Royal_Enfield_Hunter_350.jpg",
    },
    {
      name: "Royal Enfield Classic 350",
      price: "1,45,000",
      offerPrice: "1,36,000",
      km: "12,000",
      owner: "1st Owner",
      year: "2019",
      location: "Theni",
      img: "https://images.overdrive.in/wp-content/odgallery/2022/08/63809_2022_Royal_Enfield_Hunter_350.jpg",
    },
  ];

  return (
    <div style={styles.grid}>
      {bikes.map((b, i) => (
        <BikeCard key={i} data={b} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    marginTop: 20,
  },
};
