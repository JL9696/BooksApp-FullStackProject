import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getOrdersProduct } from '../../../redux/orderRedux';
import CartSum from '../../features/CartSum/CartSum';

const CartPage = () => {
  const products = useSelector(getOrdersProduct);

  if (!products || products.length === 0) {
    return <div className="container">There are no products in your cart</div>;
  } else {
    return (
      <>
        <div>
          <h2> Your cart:</h2>
          {products.map((product) => {
            return (
              <CartSum
                editable={true}
                key={product.productId}
                {...product}
              ></CartSum>
            );
          })}
        </div>

        <NavLink to="/">
          <Button className='btn btn-secondary mr-2'>Get back to shopping</Button>
        </NavLink>
        <NavLink to="/summary">
          <Button className='btn btn-secondary'>Proceed to summary</Button>
        </NavLink>
      </>
    );
  }
};

export default CartPage;