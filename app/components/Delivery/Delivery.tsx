
import { BiCycling } from 'react-icons/bi'
import { BsDoorOpen } from "react-icons/bs"
import { IoFastFood } from "react-icons/io5"
import { RiEBike2Fill } from "react-icons/ri"

export const Delivery = ()=>{

    return(
        <>
        <div className="pt-[8rem] pb-[3rem]">
            <div className="w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[3rem]">
                {/* the image */}
                <figure >
                    <BiCycling className="text-red-600 w-[100%] h-auto"/>
                   
                </figure>
                {/* text */}
                <div>
                    <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold
                    leading-[3rem] md:leading[4rem] mb-8"> Your  <span className="text-red-600">Favorite Pastries</span> On The Way</h1>
                    <p className="text-black text-[17px] text-opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorem ullam distinctio? Neque minima laudantium voluptatum, sit eum rerum nemo velit aspernatur cumque fugit voluptas quo nesciunt quaerat reprehenderit pariatur.</p>

                    <div className="flex items-center space-x-3 mt-[2rem]">
                        <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600"/>
                        <h1 className="text-[18px] text-black font-medium">Delivery in 30 minutes</h1>
                    </div>
                    <div className="flex items-center space-x-3 mt-[1rem]">
                        <IoFastFood className="w-[2rem] h-[2rem] text-red-600"/>
                        <h1 className="text-[18px] text-black font-medium">Free shipping from $75.0</h1>
                    </div>
                    <div className="flex items-center space-x-3 mt-[1rem]">
                        <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600"/>
                        <h1 className="text-[18px] text-black font-medium">Delivery on your door step</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}