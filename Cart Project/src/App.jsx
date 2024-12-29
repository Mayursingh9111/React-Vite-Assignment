import React, { useState } from "react";
import "./index.css";

// Sample product data for iPhones
const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 99999,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1660754213188",
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 79999,
    image:
      "https://static.digitecgalaxus.ch/Files/6/8/2/2/7/9/3/8/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-4__WWEN.jpg",
  },
  {
    id: 3,
    name: "iPhone 13",
    price: 69999,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
  },
  {
    id: 4,
    name: "iPhone SE",
    price: 42999,
    image:
      "https://i5.walmartimages.com/asr/3d91d080-7559-44d4-a49d-eba3e04d2a69_2.bbd4cd51ac8601402103e5e4ad66cf23.jpeg",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(products);

  // Increase item quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove individual item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * (item.quantity || 1)),
      0
    );
  };

  return (
    <div className="cart-container">
      <h1>Your Bag</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>₹{item.price.toLocaleString()}</p>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => increaseQuantity(item.id)}>▲</button>
                  <p>{item.quantity || 1}</p>
                  <button onClick={() => decreaseQuantity(item.id)}>▼</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ₹{calculateTotal().toLocaleString()}</h2>
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
