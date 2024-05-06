import Link from 'next/link'
import React from 'react'
import { FaBurger } from 'react-icons/fa6'
import { BiCycling } from 'react-icons/bi'


const Nav = () => {
    // links contain the names and links associated to listed names
    const links =[
        {name:'Home',href:'/'},
        {name:'Shop',href:'/'},
        {name:'Menu',href:'/'},
        {name:'Blog',href:'/'},
        {name:'Contact',href:'/'},
    ]

    
  return (
    <div className='h-[12vh] bg-white'>
      <div className='sm:w-[90%] w-[95%] mx-auto flex items-center h-[100%] justify-between'>
             {/* logo */}
             <div className='flex  items-center space-x-2'>
                <FaBurger className='text-orange-500 w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] '/>
                <h1 className='font-semibold text-[20px] sm:text-[30px]'>BurgerBite</h1>

             </div>
             <ul className='hidden lg:flex items-center space-x-10'>
                {links.map((item)=>{
                    return(
                        <li key={item.href} className='font-medium text-[20px]  hover:text-red-600'>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    )
                })}
             </ul>
             {/* buttons */}
             <div>
                <button className='px-6 py-2 sm:px-8 py-3 text-[14px] bg-blue-950 transition-all duration-200 rounded hover:bg-red-600
                flex items-center space-x-2 text-white'>
                    <span> <BiCycling className='w-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]'/></span>

                    <span></span>
                </button>
             </div>
      </div>
    </div>
  )
}

export default Nav
