import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { Route, Switch } from "react-router-dom";

import Info from "./info/info";
import Offers from "./offers/Offers";



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
     
      <div className="content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
          nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
          eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
          numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
          doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
          Recusandae, ad!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
          nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
          eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
          numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
          doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
          Recusandae, ad!
        </p>
      </div>
    );


  
};
export default About;
