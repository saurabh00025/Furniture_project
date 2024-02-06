import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './components/about.jsx';
import Account from './components/account.jsx';
import Blogs from './components/blogs.jsx';
import Contact from './components/contact/contact.jsx';
import Faq from './components/faq.jsx';
import Products from './components/products.jsx';
import Navigation from './components/Navigation.jsx';
import FeaturedProduct from './components/FeaturedProduct.jsx';
import LatestProduct from './components/latestProduct.jsx';
import Four_star from './components/four_star.jsx';
import Five_star from './components/five_star.jsx';
import Cart from './components/cart.jsx';
import Antique_table from './Product List/Antique_table.jsx';
import Arm_chair from './Product List/Arm_chair.jsx';
import Armchair_patricia from './Product List/Armchair_patricia.jsx';
import Computer_table from './Product List/Computer_table.jsx';
import Egyptian_table from './Product List/Egyptian_table.jsx';
import Foyer_table from './Product List/Foyer_table.jsx';
import Futon_armchair from './Product List/Futon_armchair.jsx';
import Lounger_armchair from './Product List/Lounger_armchair.jsx';
import Luxury_sofa from './Product List/Luxury_sofa.jsx';
import Modern_couch from './Product List/Modern_couch.jsx';
import Shiny_table from './Product List/Shiny_table.jsx';
import Toska_armchair from './Product List/Toska_armchair.jsx';
import Wolf_rokoko from './Product List/Wolf_rokoko.jsx';
import ScrollToTop from './pages/ScrollToTop.jsx';


const App = () => {

  return (
    <>
    <Router>
      <ScrollToTop/>
      <Navigation/>
      <Routes>
        <Route path = "/" element = {<Home/>} exact />
        <Route path = "/products" element = {<Products/>} />
        <Route path = "/about" element = {<About/>} exact />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/account" element = {<Account/>}  />
        <Route path = "/blogs" element = {<Blogs/>} />
        <Route path = "/faq" element = {<Faq/>} />
        <Route path = "/featuredProduct" element = {<FeaturedProduct />} />
        <Route path = "/latestProduct" element = {<LatestProduct />} />
        <Route path = "/five_star" element = {<Five_star/>}/>
        <Route path = "four_star" element = {<Four_star/>}/>
        <Route path = "cart" element = {<Cart/>} />
        <Route path = "Antique_table" element = {<Antique_table/>} />
        <Route path = "Arm_chair" element = {<Arm_chair/>} />
        <Route path = "Armchair_patricia" element = {<Armchair_patricia/>} />
        <Route path = "Computer_table" element = {<Computer_table/>} />
        <Route path = "Egyptian_table" element = {<Egyptian_table/>} />
        <Route path = "Foyer_table" element = {<Foyer_table/>} />
        <Route path = "Futon_armchair" element = {<Futon_armchair/>} />
        <Route path = "Lounger_armchair" element = {<Lounger_armchair/>} />
        <Route path = "Luxury_sofa" element = {<Luxury_sofa/>}/>
        <Route path = "Modern_couch" element = {<Modern_couch/>} />
        <Route path = "Shiny_table" element = {<Shiny_table/>} />
        <Route path = "Toska_armchair" element = {<Toska_armchair/>} />
        <Route path = "Wolf_rokoko" element = {<Wolf_rokoko/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
