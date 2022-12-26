import React from 'react'
import Anon from '../media/anon.jpg'
const Text = ({post}) => {
  return (
    <div className='update-text'>
     <img src= {Anon}  style={{"width":"5rem","height":"5rem","borderRadius":"50%"}} alt='img' /><h1 style={{"fontSize":"1.5rem","fontFamily":"sans-serif"}}>Anonymous</h1>
        <h1 style={{"marginTop":"3rem","fontFamily":"Arial","overflow":"auto","height":"9rem"}}>{post}</h1>
    </div>
  )
}

export default Text