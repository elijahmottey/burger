import React from 'react'
import { Metadata } from 'next'
import  Slider from './slider/Slider'
import  Feature from './Feature/feature'
import PopularPastries from './PopularPastries/PopularPastries'
import { Delivery } from './Delivery/Delivery'
import { Team } from './Team/Team'
import { Reservation } from './Reservation/Reservation'

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
      <Team/>
      <Reservation/>
      
    </div>
  )
}

export default Home
