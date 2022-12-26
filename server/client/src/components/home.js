import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Chat from '../media/chat.jpg'
import Chat1 from '../media/chat1.jpg'
import Chat2 from '../media/chat2.jpg'
import Chat3 from '../media/chat3.jpg'
import Chat4 from '../media/chat4.jpg'
const Home = () => {
  return (
    <>
    <div className='home'>
        <div style={{"zIndex":"-10","position":"relative","width":"100vw","minWidth":"50rem"}}>
        <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
        <div>
        <img style={{"width":"100vw","minWidth":"60rem","height":"70rem","zIndex":"-10"}} src={Chat} alt='img' />
        </div>
        <div>
        <img style={{"width":"100vw","minWidth":"60rem","height":"70rem","zIndex":"-10"}} src={Chat1} alt='img' />
        </div>
        <div>
        <img style={{"width":"100vw","minWidth":"60rem","height":"70rem","zIndex":"-10"}} src={Chat2} alt='img' />
        </div>
        <div>
        <img style={{"width":"100vw","minWidth":"60rem","height":"70rem","zIndex":"-10"}} src={Chat3} alt='img' />
        </div>
        <div>
        <img style={{"width":"100vw","minWidth":"60rem","height":"70rem","zIndex":"-10"}} src={Chat4} alt='img' />
        </div>
        </Carousel>
        </div>
   
        {/* <div id='hero' className='hero' style={{"display":"flex","justifyContent":"center","marginTop":"4rem","position":"relative","zIndex":"0"}}>
        <div style={{"position":"relative"}}>
        <button style={{"width":"14rem","height":"4rem","backgroundColor":"hotpink"}}></button>
            <button onClick={()=>alert('hello')} className='hero-btn' style={{"position":"absolute","top":"1rem","left":"-1rem"}}>Exlpore More</button>
            </div>
        </div> */}
        </div>
    </>
  )
}

export default Home