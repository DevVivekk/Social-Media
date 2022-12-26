import React from 'react'
import Logo from '../media/logo1.png'
import Fa from '../media/facebook.png'
import Ia from '../media/twitter.png'
import Ta from '../media/insta.png'
const Connect = () => {
  return (
    <div className='connect'>
    <div className='prob' style={{"display":"flex","flexDirection":"row","width":"40rem"}}>
        <img src={Logo} alt='img' style={{"marginTop":"-1.8rem","width":"6rem","height":"6rem"}} />
        <h1 style={{"color":"white"}}>InstaShare</h1>
        </div>
        <div style={{"color":"white","display":"flex","flexDirection":"column","height":"auto","justifyContent":"center"}}>
            <h1 style={{"color":"blueviolet","fontSize":"3rem","fontFamily":"Arial"}}>Connect</h1>
            <h2 style={{"fontSize":"2rem","fontFamily":"serif","marginTop":"4rem"}}>New Delhi, India</h2>
            <h2 style={{"fontSize":"2rem","fontFamily":"serif","marginTop":"4rem"}}>vivekbhardwaj0222@gmail.com</h2>

            <div style={{"marginTop":"4rem"}}>
        <img src={Fa} alt='img' style={{"width":"3rem","height":"3rem"}} />
        <img src={Ia} alt='img' style={{"width":"3rem","height":"3rem","marginLeft":"2rem"}} />
        <img src={Ta} alt='img' style={{"width":"3rem","height":"3rem","marginLeft":"2rem"}} />
        </div>
        </div>
    </div>
  )
}

export default Connect