import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BikeView() {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:5000/bikes/" + id).then((r) => setBike(r.data));
  }, [id]);
  if (!bike) return <p>Loading...</p>;
  return (
    <div style={{ padding: 20 }}>
      <h2>{bike.name}</h2>
      {bike.images?.map((img, i) => (
        <img key={i} src={img} width="200" style={{ margin: 5 }} />
      ))}
      <h3>Videos</h3>
      {bike.videos?.map((v, i) => (
        <video key={i} controls width="300" style={{ margin: 5 }}>
          <source src={v} />
        </video>
      ))}
      <p>Price: ₹ {bike.price}</p>
      <p>Model: {bike.model}</p>
      <p>{bike.description}</p>
    </div>
  );
}
