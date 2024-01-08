import {Link} from 'react-router-dom';
import FeaturedProduct from "../components/FeaturedProduct";
import LatestProduct from "../components/LatestProduct";
import Five_star from '../components/five_star';
import Four_star from '../components/four_star';
import Footer from '../components/footer';
const home = () => {
  const sofa = {
    background: 'radial-gradient(#fff, #ffd6d6)'
  }
  return (
    <>
    <div className="text-black">
      <div class = "p-16 rounded" style = {sofa}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Give your taste<br />
            an aesthetic sense!
          </h1>
          <p className="mt-4 text-sm md:text-base">
            CrEaTiViTy In EvErY ExPlOsIoN iNnOvAtEs yOu,<br />
            InNoVaTe YoUr HoMe, ShApInG yOuR nEeD tO mEeT tHe FuTuRe.
          </p>
          <div class = "py-2">

          </div>
          <Link to = "/products" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            Explore Now
          </Link>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="images/back1.jpg"
            alt="Aesthetic Taste"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
      </div>
      <div className = "flex space-x-2 py-20 px-20">
    <div className = "flex-none w-1/3 px-5">
        <img src="images/category-1.jpg" alt="" class="w-full h-auto rounded-md" />
    </div>
    <div className = "flex-none w-1/3 px-5">
        <img src="images/category-2.jpg" alt="" class="w-full h-auto rounded-md" />
    </div>
    <div className = "flex-none w-1/3 px-5">
        <img src="images/category-3.jpg" alt="" class="w-full h-auto rounded-md" />
    </div>
</div>
    <h1 className="text-center font-bold text-black text-3xl underline-red text-gray-500">Featured Products</h1>
    <div className="mx-auto border-b-4 border-red-500 w-20 rounded-full "></div>
    <div className = "py-20">
      <FeaturedProduct/>
    </div>

    <h1 className = "text-center font-bold text-black text-3xl underline-red text-gray-500">Latest Products</h1>
    <div className = "mx-auto border-b-4 border-red-500 w-20 rounded-full"></div>
    <div className = "py-20">
      <LatestProduct/>
    </div>

    <div class="px-20 " style = {sofa}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="col-2">
          <img src="images/expprod.png" class="offer-img" alt="" />
        </div>
        <div class = "py-32">
        <div class="col-2 py-32 px-4 " >
          <p class = "text-2xl">Exclusively available</p>
          <h1 class="text-5xl font-bold py-2">Luxury Grey Sofa</h1>
          <Five_star/>
          <div class = "py-10"> 
            <Link to = "Luxury_sofa" class = "mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">Buy Now &#8594;</Link>
          </div>      
        </div>
      </div>
    </div>
  </div>

  <div class= "py-16">
    <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <Link class="shadow-2xl transition-transform duration-500 transform hover:-translate-y-2">
        <i class="fa fa-quote-left text-4xl px-32 text-red-600"></i>

        <p class="text-gray-800 m-4">
        I had never purchased furniture online, so I had no idea what to expect, but the team portrayed consummate professionalism. I am impressed by your design abilities and seamless coordination skills. I adore my new space, and I am forever grateful to you and your team.
Your team has an amazing gift to transform your home from ordinary to outstanding! From design to execution, they make it fun and even exhilarating. They work to create a plan of action with different options and varying budgets.
Working with Decor was such a pleasure that I am tempted to move just so we can start all over again! I know you will continue to brighten many lives; thank you for your part in ours!
        </p>
        <div class = "px-32"><Four_star/></div>
        <img src="images/mayank.jpeg" alt="" class="mt-4 mx-auto block rounded-full w-16 h-16"/>
        <h3 class="text-center text-xl font-bold mt-2 py-2">Mayank Dass</h3>
      </Link>

      
      <Link class="shadow-2xl transition-transform duration-500 transform hover:-translate-y-2">
      <i class="fa fa-quote-left text-4xl px-32 text-red-600"></i>
        <p class="text-gray-800 m-4">
          I just wanted to say thanks for the consultation – so helpful and informative! We're very excited about turning our space into our place. I am so glad that I stumbled across Interior Icons. It has the style of furniture that I love most, and it offers its items at prices that meet my budget. I am hooked. 
        </p>
        <div class = "px-32"><Four_star/></div>
        <img src="images/shivani.png" alt="" class="mt-4 mx-auto block rounded-full w-16 h-16"/>
        <h3 class="text-center text-xl font-bold mt-2">Shivani Kumari</h3>
      </Link>

      <Link class="shadow-2xl transition-transform duration-500 transform hover:-translate-y-2">
        <i class="fa fa-quote-left text-4xl px-32 text-red-600 "></i>
        <p class="text-gray-800 m-4">
          When looking around for new furniture, my spouse happened to click on an ad for Interior Icons. Game changer! I'll never shop elsewhere for furniture again. To say I'm happy is an understatement.
        </p>
        <div class = "px-32"><Five_star/></div>
        <img src="images/shailendra.jpg" alt="" class="mt-4 mx-auto block rounded-full w-16 h-16"/>
        <h3 class="text-center text-xl font-bold mt-2">Shailendra Kumar</h3>
      </Link>
    </div>
  </div>
</div>

  <div class="container mx-auto">
    <div class="py-20 grid grid-cols-1 md:grid-cols-5 gap-4">
      <Link><img src="images/logo-godrej.png" alt="" class="mx-auto" /></Link>
      <Link><img src="images/logo-oppo.png" alt="" class="mx-auto" /></Link>
      <Link><img src="images/logo-paypal.png" alt="" class="mx-auto" /></Link>
      <Link><img src="images/logo-philips.png" alt="" class="mx-auto" /></Link>
      <Link><img src="images/logo-coca-cola.png" alt="" class="mx-auto" /></Link>
  </div>
</div>
    </div>
    <Footer/>
  </>
    
  );
};

export default home;
