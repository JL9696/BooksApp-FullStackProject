import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AllProducts = ({ id, name, price, images }) => {
  return (
    <>
      <div
        className="card col-8 col-sm-2 p-1 border border-secondary"
        style={{ height: '350px' }}
      >
        <div className="card-body overflow-hidden" style={{ height: '130px' }}>
          <img
            src={images[0]?.url}
            alt="product"
            className="card-img-top"
            style={{ height: '180%', objectFit: 'contain' }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <div className="row justify-content-around">
            <p className="card-text mb-2">Price: {price}</p>
          </div>
          <Link to={`product/${id}`}>
            <Button className="col-12 card-text btn btn-secondary m-2">Read More</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllProducts;