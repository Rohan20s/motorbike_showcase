import React from 'react'
import logo from '../../../assets/hero-logo.png'
import landing_bike from '../../../assets/images/landing-bike.png'
import { BsFillTelephoneFill } from 'react-icons/bs'
import SlideLayout from '../../../components/SlideLayout'

const LandingSlider = ({animate}) => {


  const sliderContent=[
    {
      paragraph_1:  <h2 className=' text-5xl relative text-white text-montserrat tracking-widest mt-12 z-10 max-md:w-full max-md:text-3xl max-sm:text-2xl'>
      Feel The Ride, With Hero As You
    </h2>,
      
      paragraph_2: <span className='text-base w-11/12 mt-6 text-palanquin text-white-400 max-md:text-sm max-sm:text-xs max-sm:mt-2'>
      Join us as we embark on this exhilarating journey through the fascinating world of riders. Whether you're into mountain biking, road trip, urban commuting, or just looking for guidance on maintenance and safety, our team of riding enthusiasts is here to support and empower you.
      Ready to kickstart your cycling adventure? Start exploring Hero bikes now!
    </span>,

      query:true,

      image_content:landing_bike,

      theme:"dark",

    }
  ]


  return (
    <SlideLayout sliderContents={sliderContent} id="landing" animate={animate} />
  )
}

export default LandingSlider