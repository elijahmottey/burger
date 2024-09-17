import React from 'react'
import { ImCross } from 'react-icons/im'
import { links } from './utl'
import Link from 'next/link'


interface Props{
  showNav : boolean;
  closeNav: ()=>void;
}

const Mobile = ({closeNav,showNav}:Props) => {

  const navStyle = showNav ? 'translate-x-0': 'translate-x-[-100%]'

  return (
    <div className={`fixed ${navStyle} right-0  transition-all duration-500 top-0 bottom-0 left-0
    h-[100vh] bg-[#000000e0] z-[1002]`}  >
      <ImCross  onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white'/>
      <div className={`bg-emerald-700 ${navStyle} transition-all duration-200 delay-200 flex flex-col items-center
      justify-center w-[70%] h-[100%]`}>

{links.map((item)=>{
                    return(
                        <li key={item.href} className='font-medium text-[20px] mb-10  hover:text-yellow-400 text-white list-none'>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    )
                })}

      </div>
    </div>
  )
} 

export default Mobile
