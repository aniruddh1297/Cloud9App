import "./Products.css";
import { useState } from "react";

import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Selector from "./Selector/Selector";

const Products = () => {

 
  return (
    <div className="card-container">
     <input type="text" className="search-box" placeholder="Search"/> 
     <Selector/>

     <button type="Submit" className="submitBtn">Submit</button>


      
    </div>
  );




};
export default Products;
