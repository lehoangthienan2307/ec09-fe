import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Carousel from '../../slider/Carousel'
import MultiCarousel from '../../slider/MultiCarousel'
import About from '../../slider/About'
import BestSeller  from '../../slider/BestSeller'
import Category from '../../category/Category'

const Body = () => {
  return (
       <div>
      <Carousel/>
      <Category/>
      <MultiCarousel />
      <BestSeller/>
      <About/>
       </div> 

  )
}

export default Body