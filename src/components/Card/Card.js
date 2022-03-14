// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function MediaCard(props) {


//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={props.img}
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {props.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {props.description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">BuyNow</Button>
    
//       </CardActions>
//     </Card>
//   );
// }
import './Card.css';
import { useState } from "react";
// import Card from "../Card/Card";

const Card =(props)=>{

  
      return (
        <div className="content">
          <div class="row">
            <div class="col-md-10 col-md-offset-2">
                <div class="tile-container">
               
                    <div class="tile1">
                    <img src={props.img} />    
                    <button style={{width:"100%", height:"300px",fontSize:"20px",color:"#3691B8", borderRadius: "50px", marginTop:"0px", marginLeft:"0px", backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingTop:"8em", mixBlendMode:"color-burn"}}> {props.title}
                        {props.description}</button>
                       <a href={props.link}> <button > Buy Now </button></a>
                    </div>
      
                </div>
            </div>
        </div>
        </div>
      );
    
}

export default Card;