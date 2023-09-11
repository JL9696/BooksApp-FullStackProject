import CartSum from '../../features/CartSum/CartSum';
import { useSelector } from 'react-redux';
import { getOrders, getOrdersProduct, postOrderRequest} from '../../../redux/orderRedux';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';

const Summary = () => {
  const products = useSelector(getOrdersProduct);
  const order = useSelector(getOrders);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('works');
    dispatch(postOrderRequest(order));
  };

  if (!products || products.length === 0) {
    return <div className="container">There are no products in your cart</div>;
  } else {
    return (
      <>
        <div>
          <h2> Your order:</h2>
          {products.map((product) => {
            return (
              <CartSum
                editable={false}
                key={product.productId}
                {...product}
              ></CartSum>
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <Button type="submit">Order</Button>
        </form>
      </>
    );
  }
};

export default Summary;