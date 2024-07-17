import React from 'react';
import './Cart.css';
import Button from '../Button';

function Cart({ cartItems, onCheckout }) {
    let totalPrice = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    return (
      <div className="cart__container">
          {cartItems.length === 0 ? "No items in cart" : ""}
          <br /> <span className=''>Total Price: ${ totalPrice.toFixed(2)}</span>
          <Button
              title={`${cartItems.length === 0 ? "Order !" : "Checkout"}`}
              type={"checkout"}
                disable={cartItems.length === 0 ? true : false}
                onClick={onCheckout}
          />  
      </div>
  )
}

export default Cart