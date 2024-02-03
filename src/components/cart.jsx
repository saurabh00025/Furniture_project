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
      <div className="small-container cart-page">
        {cartItems.length === 0 ? (
          <div class="flex flex-col items-center justify-center p-16">
          <div class="text-center text-gray-800 font-semibold text-2xl py-8">
              Your cart is empty.
          </div>
          <Link class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" to = "/products">
              Continue Shopping
          </Link>
      </div>
      
        ) : (
          <>
            <table className="min-w-full bg-gray-100 border border-gray-300">
              <thead>
                <tr>
                  <th className="text-left py-2 px-16 bg-red-300 ">Product</th>
                  <th className="text-left py-2 px-4 bg-red-300">Quantity</th>
                  <th className="text-left py-2 px-4 bg-red-300">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td className="py-4 px-6">
                      <div className="cart-info flex items-center">
                        <img
                          src={
                            item.id === 1
                              ? images.foyer1
                              : item.id === 2
                              ? images.futon1
                              : images.aarmchair1
                          }
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="ml-4">
                          <p className="text-lg font-bold">{item.name}</p>
                          <small className="text-gray-600">Price: ${item.price.toFixed(2)}</small>
                          <br />
                          <button className="text-red-500" onClick={() => removeItem(item.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={e => updateQuantity(item.id, parseInt(e.target.value, 10))}
                        className="w-12 p-2 border border-gray-300"
                        min="0"
                      />
                    </td>
                    <td className="py-4 px-6">
                      ${calculateSubtotal(item.price, item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed bottom-5 right-5 z-50">
                Item removed successfully from cart.
              </div>
            )}

      
      <div class="flex justify-center">
      <div class="bg-white rounded-md shadow-md w-full max-w-md">
        <div class="border-b-4 border-red-500 rounded-full"></div>
        <div class="px-6 py-4">
        <div class="text-center font-semibold text-lg mb-4">Summary</div>
        <div class="flex justify-between mb-2">
        <div>Subtotal</div>
        <div>${calculateTotalWithoutTax()}</div>
      </div>
      <div class="flex justify-between mb-2">
        <div>SGST (2.5%)</div>
        <div>${(calculateTotalWithoutTax() * 0.025).toFixed(2)}</div>
      </div>
      <div class="flex justify-between mb-2">
        <div>CGST (2.5%)</div>
        <div>${(calculateTotalWithoutTax() * 0.025).toFixed(2)}</div>
      </div>
      <div class="flex justify-between mt-4">
        <div class="font-bold">Total</div>
        <div class="font-bold">${calculateTotal()}</div>
      </div>
    </div>
  </div>
</div>

            <div className="py-3"></div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Cart;
