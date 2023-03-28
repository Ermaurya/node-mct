import React from 'react';
import { Carouse } from './Carouse';
import './HomePage.css';
import { ProductCart } from './ProductCart';

// import ImageSlider, { Slide } from "react-auto-image-slider";
// import { ProductCart } from './components/ProductCart';

export const HomePage = () => {

  return (
    <div>
      <div className='main_container' >
        <div className='Homepage'>
          <div className='Navbar_container'>
            <div className='Navbar'>
              <div className="navbar_contant">
                <div className='nav logo'>logo</div>
                <div className='nav search_box'>
                  <input type={"text"} placeholder=" Search...." />
                </div>
                <div className=' nav loginbtn'>
                  <button>Login</button>
                </div>
                <div className='nav seller_Account'>seller</div>
                <div className='nav moreInfo'>more</div>
                <div className=' nav Cart'>
                  <svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path><path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path><path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path><path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path><path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path></g></svg>
                  <span>Cart</span>
                </div>
              </div>
            </div>
          </div>
          <div className="header">
            <div className='latest_collection'>
              <div className='container'>Grocery</div>
              <div className='container'>Mobiles
               
              </div>
              <div className='container'>Fashion</div>
              <div className='container'>Electronics</div>
              <div className='container'>Appliance</div>
              <div className='container'>Home</div>
              <div className='container'>Trave</div>
              <div className='container'>Trave</div>
              <div className='container'>Top Offers</div>
              <div className='container'>Beauty, Toys & More</div>
              <div className='container'>2-Wheelers</div>
            </div>
            </div>
            <div className='slider'>
              <div className="slide">
                <Carouse/>
            </div>  
          </div>
      
                <div className='category Mobiles'>
                   
                </div>
                <div className='category Fashion'> <ProductCart/></div>
                <div className='category Beauty'>category3</div>
                <div className='category Electronics'>category4</div>
                <div className='category children'>category5</div>
                <div className='category male'>category6</div>
                {/* <div className='category female'>category7</div>
                <div className='category healthcare'>category8</div>
                <div className='category  toys'>category9</div>
                <div className='category 2-Wheelers'>category10</div> */}
        </div>
      </div>


    </div>
  )
}
