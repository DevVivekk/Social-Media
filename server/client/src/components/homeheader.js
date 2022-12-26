import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeHeader = () => {
  const navigate = useNavigate();
  const home = ()=>{
    navigate('/home')
    setHide(false);
  }



  const feedback = ()=>{
    toast.warn("Please wait, it will be updated shortly!")
    navigate('/home')
    setHide(false);
  }

  const logout = ()=>{
    navigate('/logoutt')
    setHide(false);
  }

  const connect = ()=>{
    navigate('/home')
    setHide(false);
  }

 

  const hero = document.getElementById('hero');
  function onHide(){
    setHide(!hide)
    hero.style.zIndex=-1
    if(hide===true){
      hero.style.zIndex=1
    }
  }

    const [hide,setHide] = useState(false)
  return (
    <>
    <div>
    <button onClick={onHide} style={{"position":"fixed","top":"1rem","left":"1rem","width":"5rem","height":"5rem","borderRadius":"50%","backgroundColor":"blueviolet","zIndex":"10"}}>{<BiMenuAltLeft className='side-btn' size={'2.6rem'} color={'white'} />}</button>
</div>
    {
        hide? <div className='sidebar' style={{"position":"fixed","top":"0rem"}}>
    <div className='sidebar-con'>
    <button onClick={home} className='sidebarbtn'>Home</button>
    <button onClick={feedback} className='sidebarbtn'>Feedback</button>
    <button onClick={connect} className='sidebarbtn'>Connect</button>
    <button onClick={connect} className='sidebarbtn'>Share</button>
    <button onClick={connect} className='sidebarbtn'>Explore</button>
    <button onClick={connect} className='sidebarbtn'>My Account</button>
    </div>

    <div>
    <button onClick={logout} style={{"marginRight":"2rem"}} className='sidebarbtn'>Logout</button>    
    {/* <button onClick={signup} style={{"marginRight":"3rem"}}  className='sidebarbtn'>SignUp</button> */}
    </div>
    </div>
    :null
    }
   <ToastContainer  position='top-center'/>
    </>
  )
}

export default HomeHeader