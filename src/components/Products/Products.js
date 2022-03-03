import "./Products.css";
import { useState } from "react";

import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Products = ({isUserLoggedin,isLoading}) => {
  let [products] = useState({
    begineer: [ 1, 2, 3,4],
    intermediate: [1,2,3,4],
    advance: [1,2,3,4],
  });

  if(isLoading){
    return <Loader component={"Products"} />
  }

  if(isUserLoggedin)
{

  return (
    <div className="content">
      <h3>Starter Bundles</h3>
      <div className="products">
        {products.begineer.map((p) => (
          <div key={p}>
            <Link to={`/products/${p}/begineer`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
            <p style={{ textAlign: "center" }}>Combo {p}</p>
          </div>
        ))}
      </div>
      <h3>Intermidiate Bundles</h3>
      <div className="products">
        {products.intermediate.map((p) => (
          <div key={p}>
            <Link to={`/products/${p}/intermediate`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
            <p style={{ textAlign: "center" }}>Combo {p}</p>
          </div>
        ))}
      </div>
      <h3>Professional Bundles</h3>
      <div className="products">
        {products.advance.map((p) => (
          <div key={p}>
            <Link to={`/products/${p}/professional`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
            <p style={{ textAlign: "center" }}>Combo {p}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

else{ 
  return(
    <div className="content" > 
    <h1>Please login to the app</h1> 
     </div>

  )


}

};
export default Products;
