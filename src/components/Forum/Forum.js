import './Forum.css';
import { useState } from "react";

const Forum =()=>{
    const [items] = useState([
        { title: "SLR", price: 211.99 },
        { title: "DSLR", price: 344.99 },
        { title: "Tripod", price: 12.99 },
      ]);
    
      return (
        <div className="content">
          <h3>Upcoming offers</h3>
          <div className="forum">
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
          <div className='content'>
              <h2> Articles to be displayed </h2>
          </div>
        </div>
      );
    
}

export default Forum;
