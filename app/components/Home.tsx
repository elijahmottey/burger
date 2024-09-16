import React from 'react'
import { Metadata } from 'next'
import  Slider from './slider/Slider'

export const metadata: Metadata = {
    title:"Home"
}

const Home = () => {
   
  return (
    <div>
      <Slider/>
    </div>
  )
}

export default Home
