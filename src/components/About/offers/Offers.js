import { useState } from "react";
import "./Offers.css";

const Offers = () => {
  const [items] = useState([
    { title: "Hoodie", price: 21.99 },
    { title: "Sneakers", price: 34.99 },
    { title: "Tee", price: 12.99 },
  ]);

  return (
    <div className="offers">
      <h3>Latest Offers</h3>
      <div className="offer">
        {items.map((product) => (
          <div key={product.title}>
            <img
              src="https://via.placeholder.com/350x200"
              alt="products offers"
            />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offers;
