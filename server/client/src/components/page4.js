import React from 'react'
import Page11 from '../media/chat3.jpg'
const Page4 = () => {
  return (
    <div className='page4'>
    <div style={{"display":"flex","flexDirection":"column","alignItems":"center","width":"40rem","marginTop":"3rem","marginBottom":"3rem"}}>
        <h1 style={{"fontSize":"4.3rem","fontFamily":"Arial","color":" blueviolet","fontWeight":"bolder"}}>Build Your Social Base</h1>
        <p style={{"marginTop":"5rem","fontSize":"2rem","fontFamily":"sans-serif"}}>InstaShare introduces you to ideas and spaces that may interest you.</p>
        <p style={{"marginTop":"5rem","fontSize":"2rem","fontFamily":"sans-serif"}}>You can use these spaces to post something new, engage and create connection..</p>
    </div>
    <div style={{"display":"flex","marginTop":"2rem","marginBottom":"4rem"}}>
            <img className='page1-img page4-img' src={Page11} style={{"width":"35rem","height":"35rem"}} alt='img' />
        </div>
    </div>
  )
}

export default Page4