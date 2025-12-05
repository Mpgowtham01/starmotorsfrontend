import {useState} from "react";
import axios from "axios";

export default function AddBike(){
  const[form,set]=useState({name:"",price:"",model:"",description:"",images:"",videos:""});
  const submit=async()=>{
    await axios.post("http://localhost:5000/bikes",{...form,images:form.images.split(","),videos:form.videos.split(",")});
    alert("Bike Added");
  };
  return(<div style={{padding:20,width:300}}>
    <h3>Add Bike</h3>
    {Object.keys(form).map(k=>
      <input key={k} placeholder={k} style={{margin:5,width:"100%"}} 
      onChange={e=>set({...form,[k]:e.target.value})}/>
    )}
    <button onClick={submit}>Submit</button>
  </div>);
}
