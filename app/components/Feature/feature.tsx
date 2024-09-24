import Image from "next/image"
import {Images} from "./util"

const feature = () => {
  
  return (
    <div className="pt-[5rem] pb-[3[rem]">
      {/* Heading */}
      <h1 className="heading">Meat Pie made with <br />love and<span className="text-red-500"> Care</span></h1>
    
    {/* card */}
    <div className="w-[90%] md:w-[80%]  mt-[3rem] md:mt-[5rem] mx-auto grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-[3rem]" >
      
        {Images.map(items=>{
          return(
            <div key={items.caption} className={`${items.css} hover:bg-white`}>
              <div className="p-6 hover:bg-white rounded-lg transition-all duration-200" >
              <Image src={items.image} alt="image" className="rounded-3xl"  />
              <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">{items.describe}</h1>
              <p>{items.caption}</p>
              </div>
            </div>
            
          )
})}
      </div>

    
      
    </div>
  )
}

export default feature
