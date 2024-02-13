import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { LandingSlider, BestSellers, Engines, Accelerate, Owners, ContactUs } from './Component'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment,incrementByAmount} from '../../app/Features/GlobalStates'

const Home = () => {
    const pages = ["Landing", "BestSellers", "Engines", "Accelerater", "Owners", "ContactUS"]
    const [currentPageIndex,setCurrentPageIndex]=useState(0)
    const [left,setLeft]=useState(0)
    // const count=useSelector((state)=>state.counter.value)
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     console.log(count)
    //  },[count])

    // useEffect(() => {
    //   if(count.direction==="Down"){
    //     console.log("Down")
    //      document.getElementById(pages[currentPageIndex+1]).scrollIntoView()
    //      setCurrentPageIndex(currentPageIndex+1)
    //      console.log("hitting2")
    //   } 
    //   else if(count.direction==="Up") {
    //     console.log("Up")
    //     document.getElementById(pages[currentPageIndex-1])?.scrollIntoView()
    //     setCurrentPageIndex(currentPageIndex-1)
    //   }
    // }, [count])
    

    function moveOnViewPort(el, mult) {
        let scrollPos = el.target.scrollTop;
      let viewPortHeight = el.target.clientHeight+20;
      let elementScrollPos = document.getElementById(pages[currentPageIndex]).clientWidth;

      var slidepoint = (scrollPos-(viewPortHeight*currentPageIndex))/(viewPortHeight/100);
      
    // console.log(scrollPos,viewPortHeight,slidepoint)
    
      if(scrollPos -(viewPortHeight*currentPageIndex) < viewPortHeight) {
        if(slidepoint>=0)
        document.getElementById(pages[currentPageIndex]).style.left=`${slidepoint}%`
        console.log(scrollPos -(viewPortHeight*currentPageIndex),viewPortHeight,Math.ceil((scrollPos)/viewPortHeight)-1)
        setCurrentPageIndex(prev=>prev=Math.ceil((scrollPos+20)/viewPortHeight)-1)
         
        // if(slidepoint>30){
        // document.getElementById("header").scrollTo({top:viewPortHeight*2})
        // document.getElementById(pages[currentPageIndex+1]).style.left='0%'
        // }
       
      }
     }


    return (
        <Layout>
            <div id="header" onScroll={moveOnViewPort} className='w-11/12 h-[80vh] m-auto rounded-xl overflow-auto overflow-x-hidden style-1 flex flex-col gap-5' >
                <section id={pages[0]} className='w-full min-h-[80vh] relative'>
                    <LandingSlider animate={pages[currentPageIndex]==pages[0]}/>
                </section>
                <section id={pages[1]} className='w-full min-h-[80vh] relative'>
                    <BestSellers animate={pages[currentPageIndex]==pages[1]}/>
                </section>
                <section id={pages[2]} className='w-full min-h-[80vh]'>
                    <Engines animate={pages[currentPageIndex]==pages[2]}/>
                </section>
                <section id={pages[3]} className='w-full min-h-[80vh]'>
                    <Accelerate animate={pages[currentPageIndex]==pages[3]}/>
                </section>
                <section id={pages[4]} className='w-full min-h-[80vh]'>
                    <Owners animate={pages[currentPageIndex]==pages[4]}/>
                </section>
                <section id={pages[5]} className='w-full h-full'>
                    <ContactUs animate={pages[currentPageIndex]==pages[5]}/>
                </section>
            </div>
        </Layout>
    )
}

export default Home