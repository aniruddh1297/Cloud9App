import "./Products.css";
import { useState } from "react";

import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Selector from "./Selector/Selector";
import Card from "../Card/Card";


const Products = () => {

 
  return (
    
    <div className="card-container">
      <div className="display-card">
     <input type="text" className="search-box" placeholder="Search"/> 
     <Selector/>
     <button type="Submit" className="submitBtn">Submit</button>
    
     </div>
     
     <div className="display_small_cards">
     <Card title="test" description="Test"/>
     <Card title="Nikon 2000" description="Best cam ever" img="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
     <Card title="test" description="Test"/>
     <Card title="test" description="Test"/>
     <Card title="test" description="Test"/>
     
     </div>
   
    </div>
    
    


    
  );




};
export default Products;
