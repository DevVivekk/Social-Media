import React from 'react'
import Page11 from '../media/chat4.jpg'
const Page5 = () => {
  return (
    <div className='page4'>
    <div style={{"display":"flex","marginTop":"2rem","marginBottom":"4rem"}}>
            <img className='page1-img page5-img' src={Page11} style={{"width":"35rem","height":"35rem"}} alt='img' />
        </div>
    <div style={{"display":"flex","flexDirection":"column","alignItems":"center","width":"40rem","marginTop":"3rem","marginBottom":"3rem"}}>
        <h1 style={{"fontSize":"4.3rem","fontFamily":"Arial","color":" blueviolet","fontWeight":"bolder"}}>Connect With Friends</h1>
        <p style={{"marginTop":"5rem","fontSize":"2rem","fontFamily":"sans-serif"}}>Use InstaShare to post amazing contents and share it with your friends all over the world.</p>
        <p style={{"marginTop":"5rem","fontSize":"2rem","fontFamily":"sans-serif"}}>You can also post anonymous messages to the people whom you want to connect.</p>
    </div>
    </div>
  )
}

export default Page5