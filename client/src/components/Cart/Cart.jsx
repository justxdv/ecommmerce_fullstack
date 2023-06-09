import React from 'react';
import "./cart.scss";
import { DeleteOutlined } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => {total += item.price * item.quantity});
    return total.toFixed(2);
  }
  const stripePromise = loadStripe('pk_test_51Ms82CSGilBtxzqYtCguxySSTYjI1R9ILxXzBPldASx4oPN6FDHhvwLSxU1jlIQVYH2z3blvfiJA0Z2ZoMoNG5UM004PeEf0Ho');
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch(err) {
      console.log(err);
    }
  }
  
    const handleProceedToCheckout = () => {
      if(isAuthenticated){
        handlePayment();
        
      } else {
        loginWithRedirect();
        
      }
    }
  
  
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map(item => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlined className='delete' onClick={() => dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUB-TOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart;
