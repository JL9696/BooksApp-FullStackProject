import AllProducts from '../../features/AllProducts/AllProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, loadProductsRequest } from '../../../redux/productRedux';
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { getRequest } from '../../../redux/requestRedux';

const Home = () => {
  const allProducts = useSelector(getProducts);
  const dispatch = useDispatch();
  const request = useSelector((state) => getRequest(state, 'LOAD_PRODUCTS'));

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  if (!request || !request.success) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto" ></Spinner>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          {allProducts.map((product) => {
            return (
              <AllProducts key={product.id} {...product}></AllProducts>
            );
          })}
        </div>
      </div>
    );
  };
};

export default Home;