import Image from "next/image";
import { FaStar } from "react-icons/fa";


interface Props{
    title:string;
    price:string;
    review:string;
    image:string

}

const PastryCard = ({title,price,review,image}:Props) => {
  return (
    <div className="bg-white p-6 rounded-lg m-3">
        {/* image div */}
        <div className="w-[200px] mx-auto h-[200px]">
            <Image src={image} alt={title} width={200} height={200}
            className="w-[100%] h-[100%] object-cover"/>
        </div>
        <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">{title}</h1>

        <div className="flex item-center mt-[0.6rem] space-x-3">
            <div className="flex items-center">
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600"/>
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600"/>
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600"/>
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600"/>
            </div>
            <div className="text-black opacity-80">({review})</div>
          
            
             </div>
             <p className="mt-[0.5rem] text-black opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora facilis commodi dolorum magni dolores sequi sint alias. Ducimus, sunt in veniam cum eum vel at nisi quos. Corporis, provident porro?</p>
             <div className="flex mt-[1.4rem] items-center justify-between">
                <h1>{price}</h1>

             </div>
        
      
    </div>
  )
}

export default PastryCard
