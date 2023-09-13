import CartSum from '../../features/CartSum/CartSum';
import { useSelector } from 'react-redux';
import { getOrders, getOrdersProduct, postOrderRequest, addUserinfoToOrder } from '../../../redux/orderRedux';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import CartTotalCost from '../../features/CartTotalCost/CartTotalCost';

const Summary = () => {
  const products = useSelector(getOrdersProduct);
  const order = useSelector(getOrders);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [totalCost, setTotalCost] = useState('');

  useEffect(() => {
    const userinfo = { name, address, email, phone };
    dispatch(addUserinfoToOrder(userinfo));
  }, [dispatch, name, address, email, phone]);

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
              <CartSum editable={false} key={product.productId} {...product} ></CartSum>
            );
          })}
        </div>
        <CartTotalCost></CartTotalCost>
        <div>Total order cost: {totalCost}</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} ></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input id="phone" type="text"  value={phone} onChange={(e) => setPhone(e.target.value)}></input>
          </div>
          <Button type="submit" className='btn btn-secondary'>Order</Button>
        </form>
      </>
    );
  }
};

export default Summary;