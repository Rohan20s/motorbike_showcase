import React from 'react'
import logo from '../assets/hero-logo.png'
import landing_bike from '../assets/images/landing-bike.png'
import { BsFillTelephoneFill } from 'react-icons/bs'
import 'animate.css';

const SlideLayout = ({ sliderContents ,id,animate }) => {
    
    

    return (

        <div id={id} className='flex gap-7 overflow-auto h-[80vh] scrollbar-x-hide'>
            {sliderContents.map((data, index) => (
                <div id={id+index} className={`min-w-fit h-full ${data.theme} rounded-xl relative overflow-hidden px-5 max-md:flex-col`}>
                    
                    <div className='ellipse-circle' />

                    <div className='w-1/2 max-md:w-full '>
                        {data.paragraph_1}
                    </div>

                    <div className='w-full flex h-[50vh] z-10 max-lg:h-[60%] max-md:h-[80%] max-md:flex-col-reverse'>
                        <div className={`w-2/4 h-full flex flex-col justify-between max-md:w-full max-md:h-1/2  ${animate?"animate_right":null}`}>
                            {data.paragraph_2}


                            {data.query ? <div className='w-fit flex gap-6'>
                                <div className='flex w-[40%]'>
                                    <div className='flex flex-col justify-center'>
                                        <BsFillTelephoneFill className={`light text-${data.bg} px-2 py-1 w-[25px] h-[25px] rounded-full text-[30px] mr-3`} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className={`dark text-sm max-sm:text-[12px] max-sm:leading-none`}>+91 6264170187</div>
                                        <div className={`dark text-sm max-sm:text-[12px] max-sm:leading-none`}>Call us, regarding any query</div>
                                    </div>
                                </div>
                                <div className='flex w-[40%]'>
                                    <div className='flex flex-col justify-center'>
                                        <BsFillTelephoneFill className={`light px-2 py-1 w-[25px] h-[25px] rounded-full text-[30px] mr-3`} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className={`dark text-sm max-sm:text-[12px] max-sm:leading-none`}>kansarirohan@gmail.com</div>
                                        <div className={`dark text-sm max-sm:text-[12px] max-sm:leading-none`}>send us, regarding any query</div>
                                    </div>
                                </div>
                            </div> : null}

                            {sliderContents.length > 1 ?
                                <div className='w-[200px] h-[20px] bg-ellipse-grey' onClick={e => document.getElementById(`${id+index}`).scrollIntoView()}>{index}</div>
                                :
                                null}
                        </div>

                        <div className={`w-2/4 h-full z-10 flex flex-col items-center max-md:h-3/5 max-md:w-full max-md:justify-center max-sm:h-full  ${animate?"animate":null}`}>
                            <img src={data.image_content} alt="" className={`h-full z-10 max-xl:h-full max-md:w-auto max-md:h-full max-sm:w-8/12`} />
                        </div>
                    </div>


                </div>

            ))}

        </div>
    )
}

export default SlideLayout