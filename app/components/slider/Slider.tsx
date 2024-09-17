"use client"

import React from 'react'
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,  
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,  
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,  
  },
};

const Slider = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
        showDots={true}  
      >
        {/* slider */}
        <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path'>
          {/* Slide content */}
          jove
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
