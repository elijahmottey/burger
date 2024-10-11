import Image from "next/image";


interface Prop{
    name: string;
    image: string;
    position: string;
}



export const TeamCard = ({name,image,position}:Prop)=>{



    return(
        <>
    <div>
        <Image src={image} alt="image  of Team" height={400} width={400} className=" rounded-2xl  mx-auto"/>

        <h1 className="text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold p-2 ">{name}</h1>
        <p className="mt-[0.4rem] mb-[0.4rem] py-1 bg-green-600 text-white mx-auto w-fit font-medium">{position}</p>

        <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsa odio excepturi maiores eveniet vitae blanditiis
             voluptate, sint accusantium minus?</p>

    </div>


    
    </>
    )
    
}