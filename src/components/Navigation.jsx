import { Link } from 'react-router-dom';
import images from '../images';

const Navigation = () => {
  return (
    <nav className="container mx-auto font-semibold flex items-center justify-between py-4 mt-5">
      <Link to="/">
        <img className="rounded-full ml-2" style={{ height: 70 }} src = {images.logo} alt="logo" />
      </Link>
      <ul className="flex items-center space-x-6">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="products" className="nav-link">Products</Link></li>
        <li><Link to="about" className="nav-link">About</Link></li>
        <li><Link to="contact" className="nav-link">Contact</Link></li>
        <li><Link to="account" className="nav-link">Account</Link></li>
        <li><Link to="faq" className="nav-link">FAQ's</Link></li>
        <li>
          <Link to="/cart" className="nav-link">
            <div className="relative">
              <img className="w-10 h-10" src = {images.cart} alt="cart-icon" />
              {/* Add a badge for cart items count if applicable */}
              {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2">3</span> */}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
