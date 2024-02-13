import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import heroLogo from '../assets/hero-logo.png'
import soundOff from '../assets/soundOff.png'
import soundOn from '../assets/soundOn.png'
import Sound from 'react-sound';
import music from '../assets/bg-sound.mp3'
import { AiFillDownCircle } from 'react-icons/ai'
import hamburger from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import 'animate.css';

// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount } from '../app/Features/GlobalStates'
// import { useScrollDirection } from 'react-use-scroll-direction'


const Layout = (props) => {
    const [play, setPlaying] = useState('PAUSED')

    const [toggleNav,setToggleNav]=useState(false)
    // const ScrollDirectionCount = useRef({ value: 1 })
    // const dispatch = useDispatch()

    // function disablescrolling() {
    //     var header = document.getElementById("header");
    //     header.style.overflow = "hidden";
    //     setTimeout(function () {
    //         header.style.overflow = "auto";
    //     }, 500 /* miliseconds */);
    // };

    // function Scrolling(e) {

    //     if (e.deltaY > 0 && ScrollDirectionCount.current.value < 41)
    //         ScrollDirectionCount.current.value = ScrollDirectionCount.current.value + 1
    //     else if (ScrollDirectionCount.current.value > 0) {
    //         ScrollDirectionCount.current.value = ScrollDirectionCount.current.value - 1
    //     }

    //     ScrollDirectionDetect()

    // }


    // function ScrollDirectionDetect() {
    //     if (ScrollDirectionCount.current.value == 40) {

    //         // console.log(ScrollDirectionCount.current.value)
    //         ScrollDirectionCount.current.value = 0
    //         disablescrolling()
    //         dispatch(incrementByAmount({ direction: "Down" }))
    //     }
    //     else if (ScrollDirectionCount.current.value == 0) {
    //         // console.log(ScrollDirectionCount.current.value)
    //         disablescrolling()
    //         dispatch(incrementByAmount({ direction: "Up" }))
    //         ScrollDirectionCount.current.value = 40

    //     }
    // }


    function toggleAudio() {
        if (play == "PLAYING")
            setPlaying("PAUSED")
        else
            setPlaying("PLAYING")
    }

    return (
        <div className="absolute bg-hero bg-cover bg-center h-screen w-full flex flex-col">
            <Sound url={music} playStatus={play} volume={40} loop={true} />
            <div className='w-11/12 h-[10vh] flex flex-row items-end m-auto justify-between cursor-pointer'>
                <img src={heroLogo} alt="" width={250} height={50} className='relative -left-16' />
                <div className={`font-montserrat text-lg tracking-wider ${toggleNav?"max-lg:sidebar max-lg:gap-4 z-20":"max-lg:hidden"}`}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white mr-2 underline' : 'mr-2')}>Home</NavLink>
                    
                    <span className='mx-2'>Products</span>
                    
                    <span className='mx-2'>Reviews</span>
                    
                    <span className='mx-2'>Career</span>
                </div>
                <img src={toggleNav?close:hamburger} alt="" width={30} height={30} onClick={e=>setToggleNav(!toggleNav)} className='hidden max-md:block text-white mr-4 mb-2'/>
            </div>
            <div id="header"  >
                {props.children}
            </div>

            <div className='w-11/12 h-[10vh] flex flex-row gap-7 items-start m-auto justify-between'>
                {play == "PLAYING" ?
                    <img src={soundOn} width={30} height={30} alt="off" onClick={toggleAudio} className='z-10' />
                    : <img src={soundOff} width={30} height={30} alt="on" onClick={toggleAudio} className='z-10' />
                }
                <div className='absolute left-0 right-0 flex flex-col items-center text-palanquin text-lg tracking-wider max-lg:hidden'>
                    Scroll Down
                    <AiFillDownCircle />
                </div>
                <div className='text-palanquin font-bold max-w-1/2'>@All copyright reserve by Hero Since 1996</div>
            </div>

        </div>
    )
}

export default Layout