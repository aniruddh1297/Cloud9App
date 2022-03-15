import './Forum.css';
import { useState } from "react";
import Card from "../Card/Card";

const Forum =()=>{
    const [items] = useState([
        { title: "SLR", price: 211.99 },
        { title: "DSLR", price: 344.99 },
        { title: "Tripod", price: 12.99 },
      ]);
    let abc="https://icons.iconarchive.com/icons/jonathan-rey/devices-printers/128/Camera-Nikon-Coolpix-L820-01-icon.png"
    let def="https://icons.iconarchive.com/icons/dakirby309/simply-styled/96/LightRoom-icon.png"
    let efg="https://icons.iconarchive.com/icons/streamlineicons/streamline-ux-free/128/photographer-male-icon.png"
    let ghi="https://icons.iconarchive.com/icons/iconsmind/outline/96/Tripod-withCamera-icon.png"
    let pqr="https://icons.iconarchive.com/icons/iconsmind/outline/128/Video-Tripod-icon.png"
    let lmn="https://icons.iconarchive.com/icons/iconsmind/outline/128/Idea-3-icon.png"
      return (
        <div className="content">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="tile-container">
                    <div class="tile1">
                     <a href='https://www.amazon.com/Deals-Camera-Photo/b?ie=UTF8&node=761198'><button style={{width:"50%", height:"170px",borderRadius:"0px",backgroundImage:'url('+ abc +')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"4em", marginTop:"1em"}}></button></a>
                  <button style={{width:"100%", height:"141px",fontSize:"20px",color:"#black",borderRadius:"50px", marginTop:"0px", marginLeft:"0px",  borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"0em", mixBlendMode:"darken"}}>Upcoming Deals of the month! Find best deals on Camera and Video Gear!!</button>
                    </div>
                    <div class="tile">
                    <a href='https://uk.pcmag.com/video-editing/16182/the-best-video-editing-software' ><button style={{width:"50%", height:"170px",borderRadius:"0px",backgroundImage:'url('+ def +')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"2em"}}></button>
                    <button style={{width:"100%", height:"141px",fontSize:"20px",color:"#black",borderRadius:"50px", marginTop:"0px", marginLeft:"0px",  borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"0em", mixBlendMode:"darken"}}>Top 10 most used softwares right now!! The article you dont want to miss!!</button></a> 
                    </div>
                    <div class="tile">
                     <a href='https://www.all-about-photo.com/photographers/rising-photographers.php'><button style={{width:"50%", height:"170px",borderRadius:"0px",backgroundImage:'url('+ efg +')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"1em"}}></button></a>
                    <button style={{width:"100%", height:"141px",fontSize:"20px",color:"#black",borderRadius:"50px", marginTop:"0px", marginLeft:"0px",  borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"0em", mixBlendMode:"darken"}}>Upcoming photographers and videographers!! Artists who will become popular soon!!!</button>
                    </div>
                    <div class="tile1">
                    <a href='https://shotkit.com/best-camera-under-500/'> <button style={{width:"50%", height:"170px",borderRadius:"0px",backgroundImage:'url('+ ghi +')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"1em"}}></button></a>
                    <button style={{width:"100%", height:"141px",fontSize:"20px",color:"#black",borderRadius:"50px", marginTop:"0px", marginLeft:"0px",  borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"0em", mixBlendMode:"darken"}}>Popular deals of the week! Popular Deals </button>
                    </div>
                    <div class="tile">
                     <a href='https://storiusmag.com/photography-for-beginners-where-do-i-even-start-c1ab80243f22'><button style={{width:"50%", height:"170px",borderRadius:"0px",backgroundImage:'url('+ pqr +')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"1em"}}></button></a>
                    <button style={{width:"100%", height:"141px",fontSize:"20px",color:"#black",borderRadius:"50px", marginTop:"0px", marginLeft:"0px",  borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"0em", mixBlendMode:"darken"}}>Getting started with video editing and Photography</button>
                    </div>
                    <div class="tile">
                     <a href='https://campinghiking.net/photography/top-secret-photography-techniques/'><button style={{width:"50%", height:"170px",borderRadius:"0px",backgroundImage:'url('+ lmn +')',backgroundRepeat:"no-repeat",backgroundSize:"cover", borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",mixBlendMode:"darken",paddingTop:"1em"}}></button></a>
                    <button style={{width:"100%", height:"141px",fontSize:"20px",color:"#black",borderRadius:"50px", marginTop:"0px", marginLeft:"0px",  borderBlockColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"0em", mixBlendMode:"darken"}}>Top Secrets that professionals won’t tell you!!</button>
                    </div>
                       
                </div>
            </div>
        </div>
        </div>
      );
    
}

export default Forum;
