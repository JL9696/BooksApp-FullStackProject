import styles from './Home.module.scss';
import SummaryProducts from '../../features/SummaryProducts/SummaryProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, loadProductsRequest } from '../../../redux/productRedux';
import { useEffect } from 'react';

const Home = () => {
  const allProducts = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);
  console.log([...allProducts.entries()]);

  return (
    <div className="container">
      <div className="row">
        {allProducts.map((product) => {
          return (
            <SummaryProducts key={product.id} {...product}></SummaryProducts>
          );
        })}
      </div>
    </div>
  );
}

export default Home;