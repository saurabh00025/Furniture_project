import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Five_star from '../components/five_star';
import Four_star from '../components/four_star';
import Footer from '../components/footer';
import images from '../images';

const Egyptian_table = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    const newValue = Math.max(0,e.target.value)
    setValue(newValue);
  };

  const [isAddedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const thumbnails = [
    images.egtable2,
    images.egtable3,
    images.egtable4,
    images.egtable5,
  ];

  const changeImage = (imagePath) => {
    document.querySelector('.main-image').src = imagePath;
  };

  return (
    <>
      <div className="container mx-auto p-3 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
      <img src={images.egtable1} className="w-full rounded-lg main-image" alt="Product" />

      <div className="flex justify-between mt-4 space-x-4">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            className="w-1/4 h-16 object-cover rounded-md cursor-pointer thumbnail"
            alt={`Thumbnail ${index + 2}`}
            onClick={() => changeImage(thumbnail)}
          />
        ))}
      </div>
    </div>

        <div className="md:w-1/2 md:pl-8">
          <p className="text-gray-500 text-sm">Home / Table</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Egyptian Table</h2>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">$399.00</h4>
          <select className="border p-2 my-2 rounded-md">
            <option value="">Select Textures</option>
            <option value="">XXL</option>
            <option value="">XL</option>
            <option value="">Large</option>
            <option value="">Medium</option>
            <option value="">Small</option>
          </select>
          <div className="flex items-center space-x-4">
          <input
      type="number"
      value={value}
      onChange={handleChange}
      className="border p-2 my-2 rounded-md w-16"
    />
        <Link
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Link>

      
          <Link to = "https://www.vectary.com/viewer/v1/?model=5e9faf09-2383-4114-9c78-fd9a63983a45&env=studio3" className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Try it Now!!</Link>
          </div>
          <h3 className="mt-4 text-2xl font-semibold">Product Details<i className="fa fa-indent ml-2"></i></h3>
          <br />
          <p className="text-gray-700">
          This Egyptian table is an elegant coffee table made from solid wood with brass details. The elegant Egyptian Table easily collapses for storage with the release of a small brass sliding latch beneath the tabletop - a flexible design that exemplifies the functionalism inherent in classic furniture types. For Lassen and his contemporaries, the function was paramount.
          </p>
        </div>
      </div>
    </div>
    
    {isAddedToCart && (
        <div className=" inset-0 flex items-center justify-center">
          <div className="bg-green-500 text-white py-2 px-4 rounded">
            Product added successfully to the cart!
          </div>
        </div>
      )}

    <div class="container mx-auto py-16">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-800">Related Products</h2>
        <p class="text-blue-500 cursor-pointer transition duration-300 hover:text-blue-700">View More</p>
      </div>
    </div>



    <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <div class="col-4">
            <Link to = "/Foyer_table" class="block mb-4">
                <img src={images.product_3} alt="" class="w-full h-auto"/>
            </Link>
            <h4 class="text-lg font-semibold">Foyer Table</h4>
            <Four_star/>
            <p class="text-lg">$150.00</p>
        </div>

        <div class="col-4">
            <Link to = "/Antique_table" class="block mb-4">
                <img src={images.antique1} alt="" class="w-full h-auto"/>
            </Link>
            <h4 class="text-lg font-semibold">Antique Table</h4>
            <Five_star/>
            <p class="text-lg">$150.00</p>
        </div>

        <div class="col-4">
            <Link to = "/Shiny_table" class="block mb-4">
                <img src={images.tableshiny1} alt="" class="w-full h-auto"/>
            </Link>
            <h4 class="text-lg font-semibold">Shiny Table</h4>
            <Five_star/>
            <p class="text-lg">$129.00</p>
        </div>

        <div class="col-4">
            <Link to = "/Computer_table" class="block mb-4">
                <img src={images.comptable1} alt="" class="w-full h-auto"/>
            </Link>
            <h4 class="text-lg font-semibold">Computer Table</h4>
            <Five_star/>
            <p class="text-lg">$99.00</p>
        </div>
    </div>
</div>
      <Footer/>
    </>
  )
}

export default Egyptian_table
