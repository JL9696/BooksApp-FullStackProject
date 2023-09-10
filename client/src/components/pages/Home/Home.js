import AllProducts from '../../features/AllProducts/AllProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, loadProductsRequest } from '../../../redux/productRedux';
import { useEffect } from 'react';

const Home = () => {
  const allProducts = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

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

export default Home;