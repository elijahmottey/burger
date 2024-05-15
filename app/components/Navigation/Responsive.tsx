"use client"

import React from 'react'
import Nav from './Nav'
import Mobile from './Mobile'
import {useState} from 'react'

const Responsive = () => {
  const [showNav,setShowNav] = useState(false)
  const openNav = ()=>setShowNav(!showNav)
  const closeNav = ()=>setShowNav(false)

  return (
    <div>
      <Nav openNav={openNav}/>
      <Mobile showNav={showNav} closeNav={closeNav}/>
    </div>
  )
}

export default Responsive
