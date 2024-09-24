"use client"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsivep } from '../slider/SliderUtil';
import PastryCard from './PastryCard';
import { Products } from './PastryUtil';

const PopularPastries = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
        
        <h1 className="heading">
            Our Popular  <span className="text-red-600">Pastries</span>
        </h1>
        

        {/* slider */}
        <div className="w-[80%] mt-[4rem] mx-auto">
            <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            centerMode={false}
            infinite
            responsive={responsivep}
            itemClass="item"
            showDots={false}

            >
              <div>
              {
                Products.map(products=>{
                    return(
                        <PastryCard
                        key={products.title}
                        image={products.image}
                        review={products.reviews}
                        price={products.price}
                        title={products.title}
        
                        
                        />
                    )
                })
               
              </div>
            

            </Carousel>
            
        </div>
      
    </div>
  )
}

export default PopularPastries
