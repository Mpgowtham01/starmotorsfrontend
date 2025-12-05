import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function AdminDashboard(){
  const[bikes,setBikes]=useState([]);
  useEffect(()=>{ axios.get("http://localhost:5000/bikes").then(r=>setBikes(r.data)); },[]);
  return(<div style={{padding:20}}>
    <h2>Admin Dashboard</h2>
    <Link to="/admin/add"><button>Add Bike</button></Link>
    <table border="1" cellPadding="10" style={{marginTop:20}}>
      <thead><tr><th>Name</th><th>Price</th><th>Model</th></tr></thead>
      <tbody>{bikes.map(b=><tr key={b.id}><td>{b.name}</td><td>{b.price}</td><td>{b.model}</td></tr>)}</tbody>
    </table>
  </div>);
}
