import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editOrder, removeProductFromOrder } from '../../../redux/orderRedux';
import store from '../../../redux/store';
import AmountInput from '../AmountInput/AmountInput';

const CartSum = ({ productId, name, price, orderedAmount: productAmount, details, editable }) => {
  const [amountState, setAmountState] = useState(productAmount);
  const [detailsState, setDetailsState] = useState(details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      editOrder({ productId, orderedAmount: Number(amountState), details: detailsState }),
    );
  }, [dispatch, productId, amountState, detailsState]);

  const state = store.getState();
  localStorage.setItem('cartProducts', JSON.stringify(state.orders.products));

  const handleRemove = () => {
    dispatch(removeProductFromOrder(productId));
  };

  return (
    <div className="col-12 mx-0 px-0 my-1 row border align-items-center">
      <div className="col-6 col-sm-3 col-md-3 px-0 text-center">{name}</div>
      <div className="col-6 col-sm-3 col-md-1 px-0 m-0 text-center">
        <AmountInput editable={editable} value={amountState} onChangeFunc={setAmountState}></AmountInput>
      </div>
      <div className="col-6 col-sm-3 col-md-1 px-0 text-center">
        Price:
        <br></br>
        {price}
      </div>
      <div className="col-6 col-sm-3 col-md-1 px-0 text-center">
        Total:
        <br></br>
        {price * productAmount}
      </div>
      <div className="col-12 col-sm-8 col-md-4 px-1 text-center">
        <textarea disabled={!editable} className="w-100" placeholder="Details regarding the product" value={detailsState} 
        onChange={(e) => setDetailsState(e.target.value)}  maxLength="100" ></textarea>
      </div>
      {editable && (
        <div className="col-12 col-sm-4 col-md-2 px-0 text-center">
          <Button onClick={handleRemove} className='btn btn-secondary'>Remove</Button>
        </div>
      )}
    </div>
  );
};

export default CartSum;