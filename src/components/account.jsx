import {Link} from 'react-router-dom';
import Footer from './footer';
import images from '../images';

const account = () => {
  
  return (
    <>
      <div class="py-12 bg-gradient-to-br from-gray-200 via-pink-200 to-indigo-200">
    <div class="container mx-auto flex items-center ">
            <div class="w-1/2 p-4">
                <img id="accpgimg" src={images.image1} className="w-full h-full object-cover max-w-md rounded-lg" alt="Account Image"/>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
          <div className="bg-white bg-opacity-50 p-8 rounded-md max-w-md w-full text-center">
          <form>
          <h2 className="text-2xl font-bold mb-4">Login</h2>

          <div className="mb-4 relative"> 
            <input type="email" placeholder='Email' className="w-full py-2 px-3 border-b border-gray-300 focus:outline-none" required />
          </div>

          <div className="mb-4 relative">
            <input type="password" placeholder = "Password" className="w-full py-2 px-3 border-b border-gray-300 focus:outline-none" required />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-500">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link className="text-blue-500">Forgot Password?</Link>
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Login</button>

          <div className="mt-4">
            <p className="text-black">Don't have an account? <Link className="text-blue-500">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
        </div>
    </div>
    <Footer/>

    </>
  )
}

export default account
