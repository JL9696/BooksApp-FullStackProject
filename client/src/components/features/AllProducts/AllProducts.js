import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AllProducts = ({ id, name, price, images }) => {
  return (
    <>
      <div> 
        <div className="card-body overflow-hidden" style={{ height: '300px' }}>
          <img
            src={images[0].url}
            alt="product"
          />
        </div>
        <div>
          <h5>{name}</h5>
          <div>
            <p >Price: {price}</p>
          </div>
          <Link to={`product/${id}`}>
            <Button className="col-12 card-text">Read More</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllProducts;