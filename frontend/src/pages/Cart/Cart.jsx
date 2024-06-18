// frontend/src/pages/Cart.js
import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, products, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {products.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="cart-items-item" key={index}>
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>₦{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₦{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)}>X</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Sub Total</p>
                <p>₦{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₦{getTotalCartAmount() === 0 ? 0 : 500}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₦{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 500}</b>
              </div>
            </div>
            <button onClick={() => navigate('/Order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promo-code">
            <div>
              <p>Enter Promo Code</p>
              <div className="cart-promo-input">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;