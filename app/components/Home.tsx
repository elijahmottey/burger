import React from 'react'
import { Metadata } from 'next'
import  Slider from './slider/Slider'
import  Feature from './Feature/feature'

export const metadata: Metadata = {
    title:"Home"
}

const Home = () => {
   
  return (
    <div className="overflow-hidden">
      <Slider/>
      <Feature/>
      
    </div>
  )
}

export default Home
