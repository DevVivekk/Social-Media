import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate = useNavigate();
  const home = ()=>{
    navigate('/')
    setHide(false);
  }

  const about = ()=>{
    toast.warn("You have to signup first!")
    navigate('/signup')
    setHide(false);
  }


  const feedback = ()=>{
    toast.warn("You have to signup first!")
    navigate('/signup')
    setHide(false);
  }

  const login = ()=>{
    navigate('/login')
    setHide(false);
  }

  const signup = ()=>{
    navigate('/signup')
    setHide(false);
  }

  const connect = ()=>{
    toast.warn("You have to signup first!")
    navigate('/signup')
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
    <button onClick={onHide} style={{"position":"fixed","top":"1rem","left":"1rem","width":"5rem","height":"5rem","borderRadius":"50%","backgroundColor":"purple","zIndex":"10"}}>{<BiMenuAltLeft className='side-btn' size={'2.6rem'} color={'white'} />}</button>
</div>
    {
        hide? <div className='sidebar' style={{"position":"fixed","top":"0rem"}}>
    <div className='sidebar-con'>
    <button onClick={home} className='sidebarbtn'>Home</button>
    <button onClick={about} className='sidebarbtn'>Top Feature</button>
    <button onClick={feedback} className='sidebarbtn'>Feedback</button>
    <button onClick={connect} className='sidebarbtn'>Connect</button>
    </div>

    <div>
    <button onClick={login} style={{"marginRight":"2rem"}} className='sidebarbtn'>Login</button>    
    <button onClick={signup} style={{"marginRight":"3rem"}}  className='sidebarbtn'>SignUp</button>
    </div>
    </div>
    :null
    }
   <ToastContainer  position='top-center'/>
    </>
  )
}

export default Header