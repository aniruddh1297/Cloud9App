import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { Route, Switch } from "react-router-dom";

import Info from "./info/info";
import Offers from "./offers/Offers";
import './about.css';



const About = () => {

//   const history = useHistory();
// useEffect(()=>{

  
//   history.push("/about/info")

// },[]);
  return (
    // <div>
    //   <nav style={{ border: "none", justifyContent: "center" }}>
    //     <NavLink to="/about/info">Info</NavLink>
    //   </nav>

    //   <Switch>
    //     <Route path="/about/info">
    //       <Info />
    //     </Route>
    //   </Switch>
    // </div>
     
    <div className="content-5">
        <div className="heading">About Us</div>
        <div className="text-5">ShutterNitros  is an online free for all consultancy service.  Providing accurate information about cameras and accessories. People looking for a quickstart in photography are welcome.
          In depth information about Softwares and their core functionalities. Stay Updated with our Forum panel listing various upcoming events. The Product mainly focuses on a one-stop solution by providing relevant and quality info about photography and videography.
        </div>
    </div>
    );


  
};
export default About;
