export const Reservation =()=>{
    return(
        <>
        <div className="pt-[5rem] relative mt-[2rem] pb-[5rem] mb-[3rem] bg-center bg-cover bg-[url('/images/pie1.jpg')]">
        {/* overlay  */}
        <div className="absolute w-full bg-[#000000a6] top-0 left-0 right-0 bottom-0 "></div>
        <div className="W-[80%] relative z-20 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* text content */}
            <div>
                  <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem]">
                    DO YOU HAVE ANY EVENT FOR US TO PLAN FOR YOU WITH OUR SERVICES
                  </h1>
                  <p className="text-[17px] mt-[1rem] text-white text-opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio vero illum ut doloremque vel ipsam deleniti soluta, repudiandae rem a aliquid. Sequi deleniti ipsam expedita eaque laborum dolores illo.
                  </p>
                  <div className="flex mt-[2rem] items-center space-x-4">
                    <div className="w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center"></div>
                  </div>
            </div>
            {/* reservation form */}
        </div>
        </div>
        
        </>
    )
}