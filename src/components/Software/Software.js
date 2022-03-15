import "./Software.css";
import { useState } from "react";
import { Row, Col } from 'react-simple-flex-grid';

import { Link } from "react-router-dom";
import { fontSize, fontStyle } from "@mui/system";

const Software = () => {
  
  let abc="https://img.icons8.com/fluency/344/adobe-photoshop.png"
  
  let pqr="https://img.icons8.com/color/344/adobe-lightroom--v1.png"
  
  let xyz="https://cdn1.iconfinder.com/data/icons/designer-skills/128/premiere-512.png"
  return (
    <div className="content">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="tile-container">
                
                <div>
                  <div className="tile1">
                  <a href='https://www.adobe.com/products/photoshop.html?promoid=RBS7NL7F&mv=other'><button style={{width:"80%", height:"295px",fontSize:"",backgroundImage:'url('+abc+')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"1em", marginTop:"1em"}}></button></a>
                    <button style={{width:"100%", height:"295px",fontSize:"20px",color:"black", borderRadius: "50px", marginTop:"0px", marginLeft:"0px",  backgroundRepeat:"no-repeat", backgroundSize:"cover",borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken", paddingTop:"2em",}}>To help you out, we've
                    rounded up the very best video editing software available today in the article below. And we explain, in a way that's as free from technical jargon as possible, what each has to offer and what the main differences are between them.
                          </button>
                  </div>
                  <div className="tile">
                  <a href='https://www.adobe.com/products/photoshop-lightroom.html'> <button style={{width:"80%", height:"295px",fontSize:"",backgroundImage:'url('+pqr+')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"1em", marginTop:"1em"}}></button></a>
                  <button style={{width:"100%", height:"295px",fontSize:"20px",color:"black", borderRadius: "50px", marginTop:"0px", marginLeft:"0px",  backgroundRepeat:"no-repeat", backgroundSize:"cover",borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken", paddingTop:"2em",}}>To help you out, we've
                    rounded up the very  best video editing software available today in the article below. And we explain, in a way that's as free from technical jargon as possible, what each has to offer and what the main differences are between them.
</button>
                  </div>
                  <div className="tile">
                  <a href='https://www.adobe.com/de/products/premiere.html'> <button style={{width:"80%", height:"295px",fontSize:"",backgroundImage:'url('+xyz+')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"1em", marginTop:"1em"}}></button></a>
                  <button style={{width:"100%", height:"295px",fontSize:"20px",color:"black", borderRadius: "50px", marginTop:"0px", marginLeft:"0px",  backgroundRepeat:"no-repeat", backgroundSize:"cover",borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken", paddingTop:"2em",}}>To help you out, we've
 rounded up the very 
best video editing
 software available today in the article below. And we explain, in a way that's as free from technical jargon as possible, what each has to offer and what the main differences are between them.</button>
                  </div>
                </div>
                </div>
            </div>
          </div>
    </div>
  );
};
export default Software;