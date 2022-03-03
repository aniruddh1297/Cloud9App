import "./Software.css";
import { useState } from "react";

import { Link } from "react-router-dom";

const Software = () => {
  let [products] = useState({
    begineer: [ 1, 2, 3,4],
    intermediate: [1, 2, 3, 4],
    advance: [1, 2, 3, 4],
  });

  return (
    <div className="content">
      <h3>Easy to use</h3>
      <div className="products">
        {products.begineer.map((p) => (
          <div key={p}>
            <Link to={`/software/${p}/begineer`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
            <p style={{ textAlign: "center" }}>Softwares {p}</p>
          </div>
        ))}
      </div>
      <h3>Mid range</h3>
      <div className="products">
        {products.intermediate.map((p) => (
          <div key={p}>
            <Link to={`/software/${p}/intermediate`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
            <p style={{ textAlign: "center" }}>Softwares {p}</p>
          </div>
        ))}
      </div>
      <h3>Advanced</h3>
      <div className="products">
        {products.advance.map((p) => (
          <div key={p}>
            <Link to={`/software/${p}/advance`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
            <p style={{ textAlign: "center" }}>Softwares {p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Software;
