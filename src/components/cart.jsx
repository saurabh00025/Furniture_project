import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../images';
import Footer from './footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Foyer Table', price: 299.0, quantity: 2 },
    { id: 2, name: 'Futon', price: 199.0, quantity: 1 },
    { id: 3, name: 'Wolf Rokoko ArmChair', price: 299.0, quantity: 1 },
  ]);

  const [showMessage, setShowMessage] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    newQuantity = Math.max(newQuantity, 0);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prevItems => {
      const updatedCart = prevItems.filter(item => item.id !== id);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
      return updatedCart;
    });
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  const calculateTotalWithoutTax = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    ).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateTotalWithoutTax());
    const sgst = (subtotal * 0.025).toFixed(2); // 2.5% SGST
    const cgst = (subtotal * 0.025).toFixed(2); // 2.5% CGST

    const totalAmount = subtotal + parseFloat(sgst) + parseFloat(cgst);

    return totalAmount.toFixed(2);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-800 font-semibold text-2xl py-8">
              Your cart is empty.
              <Link to="/products" className="block mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <img
                        src={item.id === 1 ? images.foyer1 : item.id === 2 ? images.futon1 : images.aarmchair1}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <button className="text-red-500" onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={e => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      className="w-16 p-2 mt-2 border border-gray-300"
                      min="0"
                    />
                    <p className="mt-2 font-semibold">Subtotal: ${calculateSubtotal(item.price, item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4">
              Item removed successfully from cart.
            </div>
          )}

          <div className="bg-white rounded-md shadow-md mt-8 p-6">
            <div className="font-semibold text-lg mb-4">Summary</div>
            <div className="flex justify-between mb-2">
              <div>Subtotal</div>
              <div>${calculateTotalWithoutTax()}</div>
            </div>
            <div className="flex justify-between mb-2">
              <div>SGST (2.5%)</div>
              <div>${(calculateTotalWithoutTax() * 0.025).toFixed(2)}</div>
            </div>
            <div className="flex justify-between mb-2">
              <div>CGST (2.5%)</div>
              <div>${(calculateTotalWithoutTax() * 0.025).toFixed(2)}</div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="font-bold">Total</div>
              <div className="font-bold text-purple-600">${calculateTotal()}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
