import Link from 'next/link'
import React from 'react'
import { FaBurger } from 'react-icons/fa6'
import { BiCycling, BiShoppingBag } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import {links} from './utl'

const Nav = () => {
    // links contain the names and links associated to listed names
   

    
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
             <div className='flex items-center space-x-4'>
                <button className='px-6 py-2 sm:px-8 py-3 text-[14px] bg-blue-950 transition-all duration-200 rounded hover:bg-red-600
                flex items-center space-x-2 text-white'>
                    <span> <BiCycling className='w-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]'/></span>

                    <span className=''> Order Now</span>
                </button >
                <button className='flex justify-center items-center sm:px-6 sm:py-2 py-2 px-4 hover:bg-green-700 transition-all duration-200
                bg-orange-600 rounded-md text-white'> 
                  <BiShoppingBag className='w-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]'/> </button>
                  <HiBars3BottomRight className='lg:hidden w-[2rem] h-[2rem] text-black'/>
             </div>
      </div>
    </div>
  )
}

export default Nav
