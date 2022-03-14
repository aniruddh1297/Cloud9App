import "./Products.css";
import { useState } from "react";
import data from './data';

import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Selector from "./Selector/Selector";
import Card from "../Card/Card";
import {Grid} from "@mui/material/Grid"


const Products = () => {
  const [filter,setFilter]=useState('');
  const [dropdown,setDropdown]=useState('');
  const [dropdown1,setDropdown1]=useState('');
  const [dropdown2,setDropdown2]=useState('');

  const handleDropdown = (event) =>{
    setDropdown(event.target.value);
  }
  const handleDropdown1 = (event) =>{
    setDropdown1(event.target.value);
  }
  const handleDropdown2 = (event) =>{
    setDropdown2(event.target.value);
  }

  let dropdownSearch= data.cardData.filter(item=>{
    return item.tag==dropdown;
  })
  let dropdownSearch1= data.cardData.filter(item=>{
    return item.tag1==dropdown1;
  })
  let dropdownSearch2= data.cardData.filter(item=>{
    return item.tag2==dropdown2;
  })

  let combined_search = dropdownSearch.concat(dropdownSearch1,dropdownSearch2);
  
  const searchText =(event)=>{

    setFilter(event.target.value);
  }
 let dataSearch = data.cardData.filter(item=>{
   return Object.keys(item).some(key=>
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
 })



  return (
    
    <div className="card-container">
      <div className="display-card">
     <input type="text" className="search-box" placeholder="Search"
     value={filter}
     onChange={searchText.bind(this)}
     /> 
     <h2>You are a</h2>
     <select value={dropdown} onChange={handleDropdown}> 

     <option value="">  </option>
       <option value="Begineer"> Begineer </option>
       <option value="Intermediate"> Intermediate </option>
       <option value="Advanced"> Advanced </option>
     </select>
     <h2>Price</h2>
     <select value={dropdown1} onChange={handleDropdown1}> 

     <option value="">  </option>
       <option value="300-400"> 300-400</option>
       <option value="500-700"> 500-700 </option>
       <option value="800-1000"> 800-1000 </option>
     </select>
     <h2>Camera</h2>
     <select value={dropdown2} onChange={handleDropdown2}> 

     <option value="">  </option>
       <option value="Lieca"> Lieca  </option>
       <option value="Cannon"> Cannon </option>
       <option value="Nikon"> Nikon </option>
     </select>
     
     {/* <Selector/> */}
     {/* <button type="Submit" className="submitBtn"  >Submit</button> */}
    
     </div>

     {dataSearch.map((item,index)=>{
       return(

        <div className="display_small_cards">
        <Card title={item.title} description={item.description} link={item.link} img={item.img}/>

        
        </div>
       )
     })}
          {combined_search.map((item,index)=>{
       return(

        <div className="display_small_cards">
        <Card title={item.title} description={item.description} link={item.link} img={item.img}/>

        
        </div>
       )
     })}


  
   
    </div>
    
    


    
  );




};
export default Products;
