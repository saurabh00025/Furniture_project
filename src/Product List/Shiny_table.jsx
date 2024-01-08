import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Five_star from '../components/five_star';
import Four_star from '../components/four_star';
import Footer from '../components/footer';


const Shiny_table = () => {
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
    'images/tableshiny2.png',
    'images/tableshiny3.png',
    'images/tableshiny4.png',
    'images/tableshiny5.png',
  ];

  const changeImage = (imagePath) => {
    document.querySelector('.main-image').src = imagePath;
  };

  return (
    <>
      <div className="container mx-auto p-3 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
      <img src="images/tableshiny1.png" className="w-full rounded-lg main-image" alt="Product" />

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
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Shiny Table</h2>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">$129.00</h4>
          <select className="border p-2 my-2 rounded-md">
            <option value="">Select Textures</option>
            <option value="modern-blue">XXL</option>
            <option value="glistening-red">XL</option>
            <option value="stunning-green">Large</option>
            <option value="army-blue">Medium</option>
            <option value="brown-sand">Small</option>
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

      
          <Link className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Try it Now!!</Link>
          </div>
          <h3 className="mt-4 text-2xl font-semibold">Product Details<i className="fa fa-indent ml-2"></i></h3>
          <br />
          <p className="text-gray-700">
          A beautiful addition to your foyer or any room Victorian-style round inlaid table with shimmery blue details. The design of the table features antique blue and radiating motif inlaid in the center of the tabletop. Elegant materials & finishes are splendidly combined with more casual styling to make this antique a unique piece of furniture further adding royalty to your decor.
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
            <Link to = "/Computer_table" class="block mb-4">
                <img src="images/comptable1.png" alt="" class="w-full h-auto"/>
            </Link>
            <h4 class="text-lg font-semibold">Computer Table</h4>
            <Five_star/>
            <p class="text-lg">$99.00</p>
        </div>

        <div class="col-4">
            <Link to = "/Antique_table" class="block mb-4">
                <img src="images/antique1.png" alt="" class="w-full h-auto"/>
            </Link>
            <h4 class="text-lg font-semibold">Antique Table</h4>
            <Five_star/>
            <p class="text-lg">$150.00</p>
        </div>

        <div class="col-4">
            <Link to = "/Wolf_rokoko" class="block mb-4">
                <img src="images/aarmchair1.png" alt="" class="w-full h-auto"/>
            </Link>
            <h4 class="text-lg font-semibold">Wolf Rokoko-Arm Chair</h4>
            <Five_star/>
            <p class="text-lg">$249.00</p>
        </div>

        <div class="col-4">
            <Link to = "/Egyptian_table" class="block mb-4">
                <img src="images/egtable1.png" alt="" class="w-full h-auto"/>
            </Link>
            <h4 class="text-lg font-semibold">Egyptian Table</h4>
            <Five_star/>
            <p class="text-lg">$399.00</p>
        </div>
    </div>
</div>
      <Footer/>
    </>
  )
}

export default Shiny_table
