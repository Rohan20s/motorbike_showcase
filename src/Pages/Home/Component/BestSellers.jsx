import React from 'react'
import landing_bike from '../../../assets/images/passion-pro.png'
import hero_logo from '../../../assets/hero-logo.png'
import SlideLayout from '../../../components/SlideLayout'
import passion_logo from '../../../assets/images/passion-logo.png'
const BestSellers = ({animate}) => {

  const sliderContent = [
    {
      paragraph_1: <img alt="logo" src={hero_logo} className='w-3/6 m-auto mt-12 z-10 max-md:mt-2 '/>,
       
      paragraph_2: <div className='flex flex-col'>
        <img alt="" src={passion_logo} className='w-1/2 max-md:w-2/6 m-auto'/>
        <span className='text-base w-11/12 mt-6 text-palanquin text-slate-black max-md:text-sm max-md:mt-2 max-sm:text-xs max-sm:mt-2'>
        This model is best seller in india with great mileage. If you are looking for good comfortable bike then this will never dissapoints you.
        This model is best seller in india with great mileage. If you are looking for good comfortable bike then this will never dissapoints you.
      </span></div>,

      query: false,

      image_content: landing_bike,

     theme: "light"

    },
    {
      paragraph_1: <img alt="logo" src={hero_logo} className='w-3/6 m-auto mt-12 z-10 max-md:mt-2 '/>,
       
      paragraph_2: <div className='flex flex-col'>
        <img alt="" src={passion_logo} className='w-1/2 max-md:w-2/6 m-auto'/>
        <span className='text-base w-11/12 mt-6 text-palanquin text-slate-black max-md:text-sm max-md:mt-2 max-sm:text-xs max-sm:mt-2'>
        This model is best seller in india with great mileage. If you are looking for good comfortable bike then this will never dissapoints you.
        This model is best seller in india with great mileage. If you are looking for good comfortable bike then this will never dissapoints you.
      </span></div>,

      query: false,

      image_content: landing_bike,

      theme: "light"

    },
  ]

  return (
    <SlideLayout sliderContents={sliderContent} id="bestSeller" animate={animate}/>
  )
}

export default BestSellers