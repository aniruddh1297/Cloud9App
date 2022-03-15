import './Accessories.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import React from 'react';
import { Slide } from 'react-slideshow-image';


const Accessories = () => {

  const slideImages = [
    'images/Camera-Evolution.jpg',
    'images/Camera-History.jpg',
    'images/ApertureScale.jpg'
  ];
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
  

  let image = "https://thumbs.dreamstime.com/b/tripod-logo-stock-illustration-design-198295152.jpg";
  let image1 = "https://cdn1.vectorstock.com/i/1000x1000/40/05/tripod-icon-or-logo-vector-5434005.jpg";
  let tableTop = "https://m.media-amazon.com/images/I/51+Wn4x5+AL._AC_SL1000_.jpg";
  let pocketTripod = "https://droneparts.de/media/image/de/49/70/740559-1-PolarPro-DJI-Osmo-Pocket-Tripod-System_600x600.jpg";
  let meduimDuty = "https://triyosys.com/wp-content/uploads/2021/04/TS-TR422-CC-AL.png";
  let studio = "https://cdn.manfrotto.com/pub/media/catalog/product/cache/15e30997edd2e02ad227dcd7c1a828d8/m/t/mt057c4-g.jpg";
  let travel = "https://cdn.shopify.com/s/files/1/0402/2052/4697/products/780283_1_1500x.jpg?v=1616513110";
  let pf = "https://cdn3.vectorstock.com/i/thumb-large/98/12/logo-human-eye-in-the-form-of-lens-vector-22349812.jpg";
  let polarizingFilter = "https://www.digital-photo-secrets.com/images/polarizing-filter-water.jpg";
  let graduatedNeutralDensity = "https://ae01.alicdn.com/kf/H1eea1a9938744c018f5dc742739b3a2cv/Graduated-Neutral-Density-0-9-GND-ND-Filter-3-Stop-for-Canon-Nikon-Sony-Fujifilm-Lens.jpg_Q90.jpg_.webp";
  let uv = "https://www.bhphotovideo.com/explora/sites/default/files/Skylight-1A_0.jpg";
  let neutralDensity = "https://res.cloudinary.com/subtel/image/upload/h_1000/q_auto,f_auto/ycnbek4rczlj5btbmxwz.jpg";
  let gn = "https://cdn3.vectorstock.com/i/thumb-large/98/12/logo-human-eye-in-the-form-of-lens-vector-22349812.jpg";
  let cu = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFu36uE2C5vLLwzVOI7H9SI9ZUPEoloIUDazlRQFrnJ0g00GmjnYZZr3FSUb7GQdoa_No&usqp=CAU";
  let cc = "https://sc04.alicdn.com/kf/HTB1Q5BWSXXXXXcqXVXXq6xXFXXX6.jpg";
  let sdCard = "https://cdn.iconscout.com/icon/premium/png-256-thumb/micro-sd-1633769-1382778.png";
  let mSdCard = "https://cdn5.vectorstock.com/i/1000x1000/56/79/grey-micro-sd-memory-card-icon-isolated-vector-25575679.jpg";
  let dyn = "https://cdn.photographypro.com/wp-content/uploads/2017/12/aperture-10.png";

    return (
        
        <div className='content'>
            <div className="search-container">
                <form style={{display:"none"}}>
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            
            <div className='category'> 

            <button  style={{width: "240px", marginTop:"70px", height: "50px", marginLeft:"18px", backgroundColor:"rgba(255, 255, 255, 0.65)", borderRadius:"18px"}} onClick= {
              ()=>{
                document.getElementById('lens').style.display = "block";
                document.getElementById('infoContainer').style.display = "none";
                document.getElementById('tripods').style.display = "none";
                document.getElementById('pFilters').style.display = "none";
                document.getElementById('batteries').style.display = "none";
                document.getElementById('memCards').style.display = "none";
                document.getElementById('cleaningKits').style.display = "none";
                document.getElementById('camStraps').style.display = "none";
            }}> Lens</button>

            <button style={{width: "240px", marginTop:"20px", height: "50px", marginLeft:"18px", backgroundColor:"rgba(255, 255, 255, 0.65)", borderRadius:"18px"}} onClick= {
              ()=>{
                document.getElementById('tripods').style.display = "block";
                document.getElementById('infoContainer').style.display = "none";
                document.getElementById('lens').style.display = "none";
                document.getElementById('pFilters').style.display = "none";
                document.getElementById('batteries').style.display = "none";
                document.getElementById('memCards').style.display = "none";
                document.getElementById('cleaningKits').style.display = "none";
                document.getElementById('camStraps').style.display = "none";
            }}> Tripods</button>

            <button style={{width: "240px", marginTop:"20px", height: "50px", marginLeft:"18px", backgroundColor:"rgba(255, 255, 255, 0.65)", borderRadius:"18px"}} onClick= {
              ()=>{
                document.getElementById('pFilters').style.display = "block";
                document.getElementById('tripods').style.display = "none";
                document.getElementById('infoContainer').style.display = "none";
                document.getElementById('lens').style.display = "none";
                document.getElementById('batteries').style.display = "none";
                document.getElementById('memCards').style.display = "none";
                document.getElementById('cleaningKits').style.display = "none";
                document.getElementById('camStraps').style.display = "none";
                }}>Polarizing Filters</button>

            <button style={{width: "240px", marginTop:"20px", height: "50px", marginLeft:"18px", backgroundColor:"rgba(255, 255, 255, 0.65)", borderRadius:"18px"}} onClick= {
              ()=>{
                document.getElementById('batteries').style.display = "block";
                document.getElementById('pFilters').style.display = "none";
                document.getElementById('tripods').style.display = "none";
                document.getElementById('infoContainer').style.display = "none";
                document.getElementById('lens').style.display = "none";
                document.getElementById('memCards').style.display = "none";
                document.getElementById('cleaningKits').style.display = "none";
                document.getElementById('camStraps').style.display = "none";
              }}>Batteries</button>

            <button style={{width: "240px", marginTop:"20px", height: "50px", marginLeft:"18px", backgroundColor:"rgba(255, 255, 255, 0.65)", borderRadius:"18px"}} onClick= {
              ()=>{
                document.getElementById('memCards').style.display = "block";
                document.getElementById('batteries').style.display = "none";
                document.getElementById('pFilters').style.display = "none";
                document.getElementById('tripods').style.display = "none";
                document.getElementById('infoContainer').style.display = "none";
                document.getElementById('lens').style.display = "none";
                document.getElementById('cleaningKits').style.display = "none";
                document.getElementById('camStraps').style.display = "none";
              }}>Memory Cards</button>

            <button style={{width: "240px", marginTop:"20px", height: "50px", marginLeft:"18px", backgroundColor:"rgba(255, 255, 255, 0.65)", borderRadius:"18px"}} onClick= {
              ()=>{
                document.getElementById('cleaningKits').style.display = "block";
                document.getElementById('memCards').style.display = "none";
                document.getElementById('batteries').style.display = "none";
                document.getElementById('pFilters').style.display = "none";
                document.getElementById('tripods').style.display = "none";
                document.getElementById('infoContainer').style.display = "none";
                document.getElementById('lens').style.display = "none";
                document.getElementById('camStraps').style.display = "none";
              }}>Cleaning Kits</button>

            <button style={{width: "240px", marginTop:"20px", height: "50px", marginLeft:"18px", backgroundColor:"rgba(255, 255, 255, 0.65)", borderRadius:"18px"}} onClick= {
              ()=>{
                document.getElementById('camStraps').style.display = "block";
                document.getElementById('cleaningKits').style.display = "none";
                document.getElementById('memCards').style.display = "none";
                document.getElementById('batteries').style.display = "none";
                document.getElementById('pFilters').style.display = "none";
                document.getElementById('tripods').style.display = "none";
                document.getElementById('infoContainer').style.display = "none";
                document.getElementById('lens').style.display = "none";
              }}>Camera Straps</button>
            </div>
            
            
            <div className='infoContainer' id='infoContainer'>
            <div style={{marginTop:"-07em"}}>
                      <a target="_blank" href="https://cdn.photographypro.com/wp-content/uploads/2017/12/aperture-10.png" marginLeft="-20em">
                        <h2>Do you know?</h2>
                     <img src="https://cdn.photographypro.com/wp-content/uploads/2017/12/aperture-10.png" alt="" width="8000em" height="500px"></img>
                      
                     </a>
            </div>
            </div>
            <div className='lens' id='lens'>
                <Col style={{marginTop:"4em"}}>
                  <button  style={{width: "240px", display: "flex", width:"96%", marginTop:"5px", height: "16em", borderRadius :"50px", backgroundColor: "rgba(196, 196, 196, 0.5)", marginRight:"1em", marginLeft:"15px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)" }} onClick={()=> window.open("https://www.amazon.de/s?k=prime+lens&crid=3KLIRT6G0354S&sprefix=prime+lens%2Caps%2C232&ref=nb_sb_noss", "_blank")}>
                    <div>
                      <a target="_blank" href="https://thumbs.dreamstime.com/b/tripod-logo-stock-illustration-design-198295152.jpg" paddingTop="1em">
                     <img src="https://m.media-amazon.com/images/I/71RVQAHQHnL._AC_SX679_.jpg" alt="" width="120px" height="80px"></img>
                      <h2>Prime Lens</h2>
                     </a>
    
                    </div>
                    <div style={{marginTop:"0em", marginLeft:"4em"}}>
                      <p style={{fontSize:"20px", font:"Lao Sans Pro"}}>1. Wide Apertures Isolate Subject and Let More Light In.</p>
                      <p style={{marginLeft:"-5.5em", fontSize:"20px", font:"Lao Sans Pro"}}>2. Sharp and crisp photos even in low light.</p>
                      <p style={{marginLeft:"-19.5em", fontSize:"20px", font:"Lao Sans Pro"}}>3. Compact</p>
                    </div>
                       
                    
                    
                  </button>
                  
                  <button  style={{width: "240px", display: "flex", width:"96%", marginTop:"40px", height: "16em", borderRadius :"50px", backgroundColor: "rgba(196, 196, 196, 0.5)", marginRight:"1em", marginLeft:"15px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onclick={()=>window.open("https://www.amazon.de/s?k=zoom+lens&crid=2DRBYLGU6XMC8&sprefix=zoom+lens%2Caps%2C135&ref=nb_sb_noss", "_blank")}>
                  <div>
                      <a target="_blank" href="https://thumbs.dreamstime.com/b/tripod-logo-stock-illustration-design-198295152.jpg" paddingTop="1em">
                     <img src="https://esquilo.io/png/thumb/JQJen6njjhJ5r6g-Camera-Lens-Background-PNG.png" alt="" width="120px" height="80px"></img>
                      <h2>Zoom Lens</h2>
                     </a>
                  </div>

                  <div style={{marginTop:"0em", marginLeft:"4em"}}>
                  <p style={{fontSize:"20px", font:"Lao Sans Pro"}}>1. Can handle a variety of shooting situations because of its variable focal length.</p>
                  <p style={{marginLeft:"-11.5em", fontSize:"20px", font:"Lao Sans Pro"}}>2. Standard quality; best for shooting scenes from afar.</p>
                  </div>
                  </button>
                </Col>
            </div>

            <div className='tripods' id='tripods'>
            <div>
                <button style={{width:"180px", height:"180px", borderRadius: "43px", marginTop:"4em", marginLeft:"10em", backgroundImage: 'url(' + tableTop + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"8em", paddingLeft:"4em", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onClick={()=>window.open("https://www.amazon.de/s?k=table+top+tripods&crid=XF09QPIAGJE3&sprefix=table+top+tripods%2Caps%2C101&ref=nb_sb_noss_2")} >TableTop</button>
                <button style={{width:"180px", height:"180px", borderRadius: "43px", marginTop:"2px", marginLeft:"10.5em", backgroundImage: 'url(' + pocketTripod + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"11em", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onClick={()=> window.open("https://www.amazon.de/s?k=pocket+tripods&crid=TAEGTLKBINLA&sprefix=pockettripods%2Caps%2C95&ref=nb_sb_noss")}>Pocket</button>
                <button style= {{width:"180px", height:"180px", borderRadius: "43px", marginTop:"2px", marginLeft:"10em", backgroundImage: 'url(' + meduimDuty + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"11em", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onClick={()=>window.open("https://www.amazon.de/s?k=mediumduty+tripods&dm=true&language=en&crid=12C1X8SY0JDOB&sprefix=mediumduty+tripods%2Caps%2C89&ref=sr_moz_back")}>Medium Duty</button>
            </div>
            <div>
                <button style={{width:"180px", height:"180px", borderRadius: "43px", marginTop:"20px",marginLeft:"10em", backgroundImage: 'url(' + studio + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"10em", offset : "0px, 4px rgba(0, 0, 0, 0.25)", paddingRight:"5em", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)" }} onClick={()=>window.open("https://www.amazon.de/s?k=studio+tripods&crid=16EFFBD43X546&sprefix=studio+tripods%2Caps%2C113&ref=nb_sb_noss")}>Studio</button>
                <button style={{width:"220px", height:"370px", borderRadius: "35px", marginTop:"20px", marginLeft:"9em", backgroundImage: 'url(' + image + ')',  backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center", mixBlendMode:"color-burn", offsetDistance: " 0px, 4px",boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} >m</button>
                <button style={{width:"180px", height:"180px", borderRadius: "43px", marginTop:"20px", marginLeft:"8.5em", backgroundImage: 'url(' + travel + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"10em", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onClick={()=>window.open("https://www.amazon.de/s?k=travel+tripods&crid=3QDOYHLYAKQZM&sprefix=travel+tripods%2Caps%2C112&ref=nb_sb_noss")}>Travel</button>
            </div>
            </div>

            <div className='pFilters' id='pFilters'>
            <div style={{height:"200px"}}>
              <div style={{height:"100px"}}>
              <button style={{marginLeft:"33em", height:"12em", width:"12em", borderRadius: "20px", marginTop:"-2em", backgroundImage: 'url(' + polarizingFilter + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"12em", offset : "0px, 4px rgba(0, 0, 0, 0.25)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)" }} onClick={()=>window.open("https://www.amazon.de/s?k=Polarizing+filter&crid=D58LZ1UBEJS0&sprefix=polarizing+filter%2Caps%2C86&ref=nb_sb_noss")} >Polarizing filters</button>
              </div>
              <div>
              <button style={{marginLeft:"8em", height:"12em", width:"12em", borderRadius: "20px", backgroundImage: 'url(' + neutralDensity + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"12em", offset : "0px, 4px rgba(0, 0, 0, 0.25)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onClick={()=>window.open("https://www.amazon.de/s?k=neutral+density+filter&sprefix=neutral+den%2Caps%2C146&ref=nb_sb_ss_ts-doa-p_1_11")}>Neutral Density Filters</button>
              <button style={{marginLeft:"40em", height:"12em", width:"12em", borderRadius: "20px", backgroundImage: 'url(' + graduatedNeutralDensity + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"12em", offset : "0px, 4px rgba(0, 0, 0, 0.25)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onclick={()=>window.open("https://www.amazon.de/s?k=Graduated+Neutral+density+filter&crid=1EQJ3EH5XXRR5&sprefix=graduated+neutral+density+filter%2Caps%2C66&ref=nb_sb_noss")}>Graduated Neutral Density Filter</button>
              
              </div>
            </div>

            <div style={{height:"8em", display: "grid"}}>
              
              <button style={{marginLeft:"33em", borderRadius: "50px", border:"transparent", height:"12em", width:"12em", backgroundImage: 'url(' + pf + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", mixBlendMode:"color-burn"}}>.</button>
             
            </div>
            <div style={{height:"200px"}}>
              <div style={{height:"100px"}}>
              <button style={{marginLeft:"8em", height:"12em", width:"12em", borderRadius: "20px", backgroundImage: 'url(' + uv + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"12em", offset : "0px, 4px rgba(0, 0, 0, 0.25)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onclick={()=>window.open("https://www.amazon.de/s?k=UV+and+skylight+filter&crid=2CZG0IKHD58DV&sprefix=uv+and+skylight+filter%2Caps%2C67&ref=nb_sb_noss")}>UV and Skylight Filters</button>
              <button style={{marginLeft:"40em", height:"12em", width:"12em", borderRadius: "20px", backgroundImage: 'url(' + cc + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"12em", offset : "0px, 4px rgba(0, 0, 0, 0.25)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onClick={()=>window.open("https://www.amazon.de/s?k=color+correcting+filter&crid=2BXPNGMLZ0ZPQ&sprefix=color+correcting+filter%2Caps%2C58&ref=nb_sb_noss")}>Color Correcting Filters</button>
              </div>
              <div>
              <button style={{marginLeft:"33em", height:"12em", width:"12em", borderRadius: "20px", backgroundImage: 'url(' + cu + ')', backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"12em", offset : "0px, 4px rgba(0, 0, 0, 0.25)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onClick={()=>window.open("https://www.amazon.de/s?k=close+up+filter&crid=18B3XLVX3LI5A&sprefix=close+up+filter%2Caps%2C66&ref=nb_sb_noss")}>Close-Up Filters</button>
              </div>
            </div>
            </div>

            <div className='batteries' id='batteries'>
            <div style={{height:"2em", marginTop:"1em", backgroundColor:"transparent", display:"grid"}}>
              <button style={{borderRadius:"36px", backgroundColor:"rgba(196, 196, 196, 0.36)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onclick={()=> window.open("https://www.amazon.de/s?k=RECHARGEABLE+LITHIUM+ION+BATTERIES&crid=3C0ONXV720PFS&sprefix=rechargeable+lithium+ion+batteries%2Caps%2C83&ref=nb_sb_noss")}>
              <p style={{textAlign:'left', fontSize:"20px", font:"Lao Sans Pro"}}>RECHARGEABLE LITHIUM ION BATTERIES</p>
              <p style={{textAlign:'left', fontSize:"16px", font:"Lao Sans Pro"}}>1. Rechargeable lithium-ion batteries are mostly used in digital SLR cameras.</p>
              <p style={{textAlign:'left',  fontSize:"16px", font:"Lao Sans Pro"}} >2. These batteries are lighter and hold up to 40% more power.</p>
              <p style={{textAlign:"right", marginTop:"2em", fontSize:"17px", font:"Lao Sans Pro"}}>Buy Now...</p>
              </button>
            </div>
            <div style={{height:"2em", marginLeft:"2em", marginTop:"11em", backgroundColor:"transparent", display:"grid"}}>
              <button style={{borderRadius:"36px", backgroundColor:"rgba(196, 196, 196, 0.36)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onclick={()=> window.open("https://www.amazon.de/s?k=NICKEL-METAL+HYDRIDE+RECHARGEABLE+BATTERIES&crid=I67OX494AA2Y&sprefix=nickel-metal+hydride+rechargeable+batteries%2Caps%2C70&ref=nb_sb_noss")}>
              <p style={{textAlign:'left', fontSize:"20px", font:"Lao Sans Pro"}}>NICKEL-METAL HYDRIDE RECHARGEABLE BATTERIES</p>
              <p style={{textAlign:'left', fontSize:"16px", font:"Lao Sans Pro"}}>1. Nickel-metal hydride rechargeable batteries are not priced as high as the lithium-ion ones, 
                 so they are preferred the most by people on a  budget.</p>

              <p style={{textAlign:"right", marginTop:"4em", fontSize:"17px", font:"Lao Sans Pro"}}>Buy Now...</p>
              </button>


            </div>
            <div style={{height:"3em", marginLeft:"4em", marginTop:"13em", backgroundColor:"transparent", display:"grid"}}>
              <button style={{borderRadius:"36px", backgroundColor:"rgba(196, 196, 196, 0.36)"}} onclick={()=>window.open("https://www.amazon.de/s?k=DISPOSABLE+BATTERIES&crid=3QWFGUE7PKSCR&sprefix=disposable+batteries%2Caps%2C129&ref=nb_sb_noss")}>
                <p style={{textAlign:'left', fontSize:"20px", font:"Lao Sans Pro"}}>DISPOSABLE BATTERIES</p>
                <p style={{textAlign:'left', fontSize:"16px", font:"Lao Sans Pro"}}>1. The basic advantage this battery offers is that it 
                  doesn't have the overhead of charging, and 
                  so can be used by photographers in case of 
                  emergency. </p>
                  <p style={{textAlign:"right", marginTop:"4em", fontSize:"17px", font:"Lao Sans Pro"}}>Buy Now...</p>
              </button>
            </div>
            </div>

            <div className='memCards' id='memCards'>
            <div>
              <div style={{height:"17em", marginTop:"1em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"30px"}}>
                <p style={{textAlign:"center", fontSize:"35px"}}>SD Cards</p>
                <button style={{ height:"12em", width:"10em", marginLeft:"7em", backgroundImage: 'url(' + sdCard + ')', backgroundRepeat:"no-repeat", backgroundSize:"contain", mixBlendMode:"color-burn", paddingTop:"10em", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onclick={()=>window.open("https://www.amazon.de/s?k=SD+cards&crid=1Y7N170FU3D4B&sprefix=sd+cards%2Caps%2C151&ref=nb_sb_noss")}>SD</button>
                <button style={{ height:"12em", width:"10em", marginLeft:"6em", backgroundImage: 'url(' + sdCard + ')', backgroundRepeat:"no-repeat", backgroundSize:"contain", mixBlendMode:"color-burn", paddingTop:"10em", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onclick={()=>window.open("https://www.amazon.de/s?k=SDHC+cards&crid=FRAFLVR0ZOWG&sprefix=sdhc+cards%2Caps%2C92&ref=nb_sb_noss")}>SDHC</button>
                <button style={{ height:"12em", width:"10em", marginLeft:"6em", backgroundImage: 'url(' + sdCard + ')', backgroundRepeat:"no-repeat", backgroundSize:"contain", mixBlendMode:"color-burn", paddingTop:"10em", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>SDXC</button>
                <button style={{ height:"12em", width:"10em", marginLeft:"6em", backgroundImage: 'url(' + sdCard + ')', backgroundRepeat:"no-repeat", backgroundSize:"contain", mixBlendMode:"color-burn", paddingTop:"10em",borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>SDUC</button>
              </div>
            </div>
            <div>
              <div style={{height:"17em", marginTop:"2em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"30px", offset:"0px, 4px rgba(0, 0, 0, 0.25)"}}>
                <p style={{textAlign:"center", fontSize:"35px"}}>microSD Cards</p>
                 <button style={{ height:"12em", width:"10em", marginLeft:"7em", backgroundImage: 'url(' + mSdCard + ')', backgroundRepeat:"no-repeat", backgroundSize:"contain", mixBlendMode:"color-burn", paddingTop:"10.5em", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} >microSD</button>
                 <button style={{ height:"12em", width:"10em", marginLeft:"6em", backgroundImage: 'url(' + mSdCard + ')', backgroundRepeat:"no-repeat", backgroundSize:"contain", mixBlendMode:"color-burn", paddingTop:"10.5em", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>microSDHC</button>
                 <button style={{ height:"12em", width:"10em", marginLeft:"6em", backgroundImage: 'url(' + mSdCard + ')', backgroundRepeat:"no-repeat", backgroundSize:"contain", mixBlendMode:"color-burn", paddingTop:"10.5em", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>microSDXC</button>
                 <button style={{ height:"12em", width:"10em", marginLeft:"6em", backgroundImage: 'url(' + mSdCard + ')', backgroundRepeat:"no-repeat", backgroundSize:"contain", mixBlendMode:"color-burn", paddingTop:"10.5em", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>microSDUC</button>
              </div>
            </div>
            </div>
            <div className='cleaningKits' id='cleaningKits'>
              <div style={{height:"10em", marginTop:"2em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"15px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>
                  <p style={{fontSize:"20px", font:"Lao Sans Pro", paddingLeft:"1em"}}>Altura Photo Professional Cleaning Kit</p>
                  <p style={{fontSize:"20px", font:"Lao Sans Pro", paddingLeft:"1em"}}>Featuring a powerful and effective air blower, odor and streak-free cleaning liquid, and plenty of other goodies, this camera lens cleaning kit has the best quality to cost of any product out there.</p>
                  <p style={{textAlign:"right", fontSize:"20px", font:"Lao Sans Pro"}}>Buy Now..</p>
              </div>
              <div style={{height:"10em", marginTop:"2em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"15px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>
              <p style={{fontSize:"20px", font:"Lao Sans Pro", paddingLeft:"1em" }}>SANHOOII Camera Cleaning Kit</p>
              <p style={{fontSize:"20px", font:"Lao Sans Pro", paddingLeft:"1em"}}>Rounding out our guide is the SANHOOII Camera Cleaning Kit, which is yet another well-balanced cleaning kit that offers a little something for everyone.</p> 
              <p style={{textAlign:"right", fontSize:"20px", font:"Lao Sans Pro", paddingLeft:"1em"}}>Buy Now..</p>
              </div>
              <div style={{height:"10em", marginTop:"2em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"15px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>
              <p style={{fontSize:"20px", font:"Lao Sans Pro", paddingLeft:"1em"}}>CamKix Professional Camera Cleaning Kit</p>
              <p style={{fontSize:"20px", font:"Lao Sans Pro", paddingLeft:"1em"}}>For those seeking a kit that comes with all the basics that you’ll need for cleaning your camera, this option from CamKix definitely does the job.</p>
              <p style={{textAlign:"right", fontSize:"20px", font:"Lao Sans Pro"}}>Buy Now..</p>
              </div>
            </div>
            <div className='camStraps' id='camStraps'>
            
            <div style={{height:"15em", marginTop:"5em"}}>
              <button style={{height:"15em", width:"15em", marginLeft:"5em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}} onclick={()=>window.open("https://www.amazon.de/s?k=kit+neck+camera+strap&crid=3O77I0RRGLQUS&sprefix=kit+neck+camera+strap%2Caps%2C92&ref=nb_sb_noss")}>
              <h2>Kit Neck</h2>
              <p>+ Practical</p>
              <p style={{marginLeft:"3em"}}>+ User adjustable</p>
              <p style={{marginLeft:"-1em"}}>+ Secure</p>
              </button>
              <button style={{height:"15em", width:"15em", marginLeft:"5em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>
              <h2>Sling Strap</h2>
              <p>+Safety</p>
              <p>+Stabilization</p>
              <p>+User adjustable</p>
              </button>
            </div>
            <div>
              <button style={{height:"15em", width:"15em", marginLeft:"5em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>
                <h2>Hand Strap</h2>
                <p>+Comfortable</p>
                <p>+Bersatile</p>
                <p>+Simple</p>
              </button>
              <button style={{height:"15em", width:"15em", marginLeft:"5em", backgroundColor:"rgba(196, 196, 196, 0.6)", borderRadius:"20px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)"}}>
                <h2>Wrist Strap</h2>
                <p>+Comfortable</p>
                <p>+Bersatile</p>
                <p>+Secure</p>
              </button>
            </div>
            </div>

        </div>
           
          
    
    )
}

export default Accessories;
