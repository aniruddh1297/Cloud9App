import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id, name } = useParams();

  return (
    <div className="content">
      <div className="image">
        <img src="https://via.placeholder.com/520x460" alt="" />
      </div>
      <div className="details">
        <h2>
          {name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque
          repudiandae itaque dolorem nihil, voluptas corporis tempora provident
          optio harum modi inventore esse nostrum exercitationem magnam tempore
          odio laborum velit! Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque
          repudiandae itaque dolorem nihil, voluptas corporis tempora provident
          optio harum modi inventore esse nostrum exercitationem magnam tempore
          odio laborum velit! Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
