import {Link} from 'react-router-dom'
import FeaturedProduct from "./FeaturedProduct";
import LatestProduct from "./latestProduct";
import Footer from './footer';
const products = () => {
  return (
    <>
    <div>
      <div class="flex items-center justify-between py-16 px-16">
        <h2 class="text-2xl font-bold px-16">All Products</h2>
        <select class="border p-2 rounded-md text-black">
          <option value="" class="bg-white text-gray-800">Default Sorting</option>
          <option value="" class="bg-white text-gray-800">Sort by Price</option>
          <option value="" class="bg-white text-gray-800">Sort by Popularity</option>
          <option value="" class="bg-white text-gray-800">Sort by Rating</option>
          <option value="" class="bg-white text-gray-800">Sort by Sales</option>
        </select>
      </div>

      <FeaturedProduct/>
      <LatestProduct/>
      <div class="page-btn flex items-center space-x-1 px-16 py-10">
        <Link class="relative inline-block px-4 py-2 rounded border border-green-500 hover:bg-green-500 hover:border-green-600 hover:text-white">1</Link>
        <Link class="relative inline-block px-4 py-2 rounded border border-green-500 hover:bg-green-500 hover:border-green-600 hover:text-white">2</Link>
        <Link class="relative inline-block px-4 py-2 rounded border border-green-500 hover:bg-green-500 hover:border-green-600 hover:text-white">3</Link>
        <Link class="relative inline-block px-4 py-2 rounded border border-green-500 hover:bg-green-500 hover:border-green-600 hover:text-white">4</Link>
        <Link class="relative inline-block px-4 py-2 rounded border border-green-500 hover:bg-green-500 hover:border-green-600 hover:text-white">&#8594;</Link>
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default products
