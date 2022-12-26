import React from 'react'
import Page11 from '../media/chat2.jpg'
const Page2 = () => {
  return (
    <div className='page2'>
    <div style={{"display":"flex","alignItems":"center","flexDirection":"column","width":"50rem","marginBottom":"5rem"}}>
        <h1 style={{"fontSize":"4rem","color":"blueviolet","fontFamily":"Arial","fontWeight":"700"}}>Keep in Touch</h1>
        <p style={{"marginTop":"5rem","fontSize":"2rem","fontFamily":"sans-serif"}}>InstaShare messaging system replaces text,call and voicemail.</p>
        <p style={{"marginTop":"5rem","fontSize":"2rem","fontFamily":"sans-serif"}}>Our built-in forums will change the way you handle group interests and discussions.</p>
    </div>
    <div style={{"display":"flex","alignItems":"center"}}>
            <img className='page1-img page2-img' src={Page11} style={{"width":"35rem","height":"35rem","marginBottom":"3rem"}} alt='img' />
        </div>
    </div>
  )
}

export default Page2