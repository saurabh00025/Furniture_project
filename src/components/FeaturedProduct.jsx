import React from 'react';
import { Link } from 'react-router-dom';
import Five_star from './five_star';
import Four_star from './four_star';
import images from '../images';
const FeaturedProduct = () => {
  return (
    <>
      <div>
        <div className="mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1">
            <Link to="/Lounger_armchair">
              <img src={images.product_1} alt="" />
            </Link>
            <h4>Lounger Armchair</h4>
            <Five_star/>
            <p>$250.00</p>
          </div>

          <div className="col-span-1">
            <Link to="/Armchair_patricia">
              <img src={images.product_2} alt="" />
            </Link>
            <h4>Armchair Patricia</h4>
            <Four_star/>
            <p>$299.00</p>
          </div>

          <div className="col-span-1">
            <Link to="/Foyer_table">
              <img src={images.product_3} alt="" />
            </Link>
            <h4>Foyer Table</h4>
            <Four_star/>
            <p>$150.00</p>
          </div>

          <div className="col-span-1">
            <Link to="/Futon_armchair">
              <img src={images.product_4} alt="" />
            </Link>
            <h4>Futon Armchair</h4>
            <Five_star/>
            <p>$299.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
