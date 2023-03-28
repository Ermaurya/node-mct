import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    // slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 1 // optional, default to 1.
  }
}
export const Carouse = () => {
  return (
    <div>
      <div className='main_slide_item'>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="all .1"
        
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className='itm' style={{}}>
          <img alt='' src='https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50' />
          {/* <img alt='' src='' /> */}
        </div>
        <div className='itm'>
          <img alt='' src='https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50' />
        </div>
        <div className='itm'>
          <img alt='' src='https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50' />
        </div>
        <div className='itm'>
          <img alt='' src='https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' />

        </div>

      </Carousel>
      </div>
    </div>
  )
}