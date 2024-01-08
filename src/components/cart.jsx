import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import images from '../images';
import Footer from './footer';
const cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Foyer Table', price: 299.0, quantity: 2 },
        { id: 2, name: 'Futon', price: 199.0, quantity: 1 },
        { id: 3, name: 'Wolf Rokoko ArmChair', price: 299.0, quantity: 1 },
      ]);
    
      const updateQuantity = (id, newQuantity) => {
        newQuantity = Math.max(newQuantity,0);
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
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
      <table className="min-w-full bg-gray-100 border border-gray-300">
        <thead>
          <tr>
            <th className="text-left py-2 px-16 bg-red-300 ">Product</th>
            <th className="text-left py-2 px-4 bg-red-300">Quantity</th>
            <th className="text-left py-2 px-4 bg-red-300">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
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
                    <Link className="text-red-500">Remove</Link>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                  className="w-12 p-2 border border-gray-300"
                  min="0"
                />
              </td>
              <td className="py-4 px-6">${calculateSubtotal(item.price, item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

    <div>
  <div className="bg-white rounded-md shadow-md">
  <div className = "w-1/2 ml-auto border-b-4 border-red-500 w-30 rounded-full"></div>
  
  <table className="ml-96">
  <tbody className=" ml-auto">
  <tr className="">
    <td className="py-2 px-96 font-semibold">Subtotal</td>
    <td className="py-2 px-4 ">${calculateTotalWithoutTax()}</td>
  </tr>
  <tr className="">
    <td className="py-2 px-96 font-semibold">SGST (2.5%)</td>
    <td className="py-2 px-4">${(calculateTotalWithoutTax() * 0.025).toFixed(2)}</td>
  </tr>
  <tr className="">
    <td className="py-2 px-96 font-semibold">CGST (2.5%)</td>
    <td className="py-2 px-4">${(calculateTotalWithoutTax() * 0.025).toFixed(2)}</td>
  </tr>
  <tr className="">
    <td className="font-bold text-2xl py-2 px-96 font-semibold">Total</td>
    <td className="py-2 px-4 text-2xl font-bold">${calculateTotal()}</td>
  </tr>
</tbody>
</table>
  </div>
</div>
    <div class = "py-3"></div>
    <Footer/>
    
    </div>
    </>
  )
}

export default cart
