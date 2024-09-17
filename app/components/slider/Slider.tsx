"use client";

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Piebg from "@/public/images/piebg.jpg";
import RoundPiebg from "@/public/images/roundpie.jpg";
import Doughnutbg from "@/public/images/doughnuts.jpg";
import Image from "next/image";
import { BiCycling } from 'react-icons/bi';

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
        {/* Slide */}
        <div className="w-[100%] h-[90vh] flex items-center justify-center flex-col bg-blue-950 clip_path">
          {/* Slide content */}
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
            <Image src={Piebg} alt="pie" />
            <div>
              <h1 className="text-[40px] font-semibold text-yellow-400">Fast Foods Meat Pie</h1>
              <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">Best <br /> Meat Pie</h1>
              <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut laboriosam consequatur maiores est at vitae nostrum, dolorum, repellendus id magnam, autem mollitia recusandae aliquam quam. Aut ex aliquam sequi.
              </p>
              <button className="px-8 mt-[2rem] sm:px-8 py-3 text-[16px] bg-green-500 transition-all duration-200 rounded hover:bg-green-700 flex items-center space-x-2 text-white">
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
                <span>Order Now</span>
              </button>
            </div>
          </div>

          {/* slide 2 */}

          
        </div>

        <div className="w-[100%] h-[90vh] flex items-center justify-center flex-col bg-red-500 clip_path">
          {/* Slide content */}
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
            <Image src={RoundPiebg} alt="pie" />
            <div>
              <h1 className="text-[40px] font-semibold text-yellow-400">Fast Foods Spring roll</h1>
              <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">Best <br /> Spring roll</h1>
              <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut laboriosam consequatur maiores est at vitae nostrum, dolorum, repellendus id magnam, autem mollitia recusandae aliquam quam. Aut ex aliquam sequi.
              </p>
              <button className="px-8 mt-[2rem] sm:px-8 py-3 text-[16px] bg-green-500 transition-all duration-200 rounded hover:bg-green-700 flex items-center space-x-2 text-white">
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
                <span>Order Now</span>
              </button>
            </div>
          </div>

          {/* slide 2 */}

          
        </div>

        <div className="w-[100%] h-[90vh] flex items-center justify-center flex-col bg-black clip_path">
          {/* Slide content */}
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
            <Image src={Doughnutbg} alt="pie" />
            <div>
              <h1 className="text-[40px] font-semibold text-yellow-400">Fast Foods Spring roll</h1>
              <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">Best <br /> Spring roll</h1>
              <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut laboriosam consequatur maiores est at vitae nostrum, dolorum, repellendus id magnam, autem mollitia recusandae aliquam quam. Aut ex aliquam sequi.
              </p>
              <button className="px-8 mt-[2rem] sm:px-8 py-3 text-[16px] bg-green-500 transition-all duration-200 rounded hover:bg-green-700 flex items-center space-x-2 text-white">
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
                <span>Order Now</span>
              </button>
            </div>
          </div>

          {/* slide 2 */}

          
        </div>

      </Carousel>
    </>
  );
};

export default Slider;
