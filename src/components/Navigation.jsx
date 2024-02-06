import { Link } from 'react-router-dom';
import images from '../images';

const Navigation = () => {

  
  return (
    <nav className="container mx-auto font-semibold flex items-center justify-between py-2 mt-5" >
      <Link to="/">
        <img className="rounded-full ml-2" style={{ height: 100 }} src = {images.logo} alt="logo" />
      </Link>
      <ul className="flex items-center space-x-6">
        <li><Link to="/" class = "hover:text-blue-500">Home</Link></li>
        <li><Link to="products" className="hover:text-blue-500">Products</Link></li>
        <li><Link to="about" className="hover:text-blue-500">About</Link></li>
        <li><Link to="contact" className="hover:text-blue-500">Contact</Link></li>
        <li><Link to="account" className="hover:text-blue-500">Account</Link></li>
        <li><Link to="faq" className="hover:text-blue-500">FAQ's</Link></li>
        <li>
          <Link to="/cart" className="hover:text-blue-500">
            <div className="relative">
              <img className="w-10 h-10" src = {images.cart} alt="cart-icon" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
