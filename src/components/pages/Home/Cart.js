
import React from 'react';
import './Cart.css';
//import OnlineMenu  from './OrderOnline';
//import OurOnlineMenuItem  from './OrderOnline';
//import { useCart } from './CartContext'; // Adjust the import path
//import CheckoutForm from './CheckoutForm';



function Cart({ displayCart, items, setCartItems, cartItems, handleAddToCart }) {


  const calculateSubtotal = () => {
    const subtotal = items.reduce((accumulator, item) => {
      const itemPrice = Number(item.price);
      if (!isNaN(itemPrice)) {
        return accumulator + itemPrice * item.quantity;
      } else {
        return accumulator;
      }
    }, 0);
    return subtotal.toFixed(2);
  };

 /*
  const calculateSubtotal = () => {
    const subtotal = items.reduce((accumulator, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);
      console.log("Price:", price, "Quantity:", quantity);
      if (!isNaN(price) && !isNaN(quantity)) {
        return accumulator + price * quantity;
      } else {
        return accumulator;
      }
    }, 0);
    console.log("Subtotal:", subtotal);
    return subtotal.toFixed(2);
  }; */



  const removeItemFromCart = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };


  const updateItemQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
  };



  /*
  const calculateSubtotal = () => {
    const subtotal = items.reduce((accumulator, item) => {
      const itemPrice = Number(item.price);
      if (!isNaN(itemPrice)) {
        return accumulator + itemPrice * item.quantity;
      } else {
        return accumulator;
      }
    }, 0);
    return subtotal.toFixed(2);
  }; */
  /*
  const calculateSubtotal = () => {
    const subtotal = items.reduce((accumulator, item) => {
 
        const price = parseFloat(item.price); Number(item.price);
        const quantity = parseInt(item.quantity);
        if (!isNaN(price) && !isNaN(quantity)) {
          return accumulator + price * quantity;
        } else {
          return accumulator;
        }
      },
      0
    );
    return subtotal.toFixed(2);
  }; */
  const renderCartItems = () => {
    return items.map((item) => (
      <div key={item.id}>
        <p>{item.title}</p>
        <div>
          Quantity:
          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
          {item.quantity}
          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <p>Price: ${item.price}</p>
        {/*<button onClick={() => removeItemFromCart(item.id)}>Remove</button> */}
        <p>Subtotal: ${calculateSubtotal()}</p>
      </div>
    ));
  };

  <Cart 
  displayCart={true} 
  items={cartItems} 
  removeItemFromCart={removeItemFromCart}
  updateItemQuantity={updateItemQuantity}
  calculateSubtotal={calculateSubtotal}
  handleAddToCart={handleAddToCart} 
  />;


  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <p>No items in cart</p>
      {displayCart && (
        <>
          {items.length === 0 ? (
            {/*<p>No items in cart</p> */}
          ) : (
            <>
              {renderCartItems()}
              {/*<p>Subtotal: ${calculateSubtotal()}</p> */}
              <button name="Add to cart" className="product__btn" onClick={handleAddToCart}>
                {/*Add to cart */}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;







