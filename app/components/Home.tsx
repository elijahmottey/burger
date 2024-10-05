import React from 'react'
import { Metadata } from 'next'
import  Slider from './slider/Slider'
import  Feature from './Feature/feature'
import PopularPastries from './PopularPastries/PopularPastries'
import { Delivery } from './Delivery/Delivery'

export const metadata: Metadata = {
    title:"Home"
}

const Home = () => {
   
  return (
    <div className="overflow-hidden">
      <Slider/>
      <Feature/>
      <PopularPastries/>
      <Delivery/>
      
    </div>
  )
}

export default Home
