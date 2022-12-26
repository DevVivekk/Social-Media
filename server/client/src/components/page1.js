import React from 'react'
import Page11 from '../media/chat1.jpg'
import Logo from '../media/logo1.png'
const Page1 = () => {
  return (
    <>
    <div className='page-1'>
    <div className='page1-box'>
    <div className='prob' style={{"display":"flex","flexDirection":"row"}}>
        <h1 style={{"color":"white"}}>InstaShare</h1>
        <img src={Logo} alt='img' style={{"marginTop":"-1.8rem","width":"6rem","height":"6rem"}} />
        </div>
        <h1 style={{"color":"white","fontSize":"6.5rem","width":"45rem","fontFamily":"arial"}}>Always Stay Connected</h1>
        <button style={{"width":"15rem","height":"4.5rem","borderRadius":"35px"}} className='page1-btn' >Learn More</button>
        </div>
        <div style={{"display":"flex","alignItems":"center"}}>
            <img className='page1-img' src={Page11} style={{"width":"35rem","height":"35rem","marginBottom":"3rem"}} alt='img' />
        </div>
    </div>

    </>
  )
}

export default Page1