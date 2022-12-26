import React, { useState } from 'react'
import Fa from '../media/facebook.png'
import Ia from '../media/twitter.png'
import Ta from '../media/insta.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({email:"",password:""})
  const handleChnage=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
 setUser({...user,[name]:value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {email,password} = user;
    const res = await fetch('/signin',{
      method:"POST",
      credentials:"include",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    })
    if(res.status===201){
     toast.success("Success")
      navigate('/uploadimage')
    }else{
      toast.warn("Invalid credentials!")
    }
  }
  return (
    <div className='signup'>
    <div className='signup-2' style={{"width":"40rem","height":"50rem","display":"flex","alignItems":"center","flexDirection":"column"}}>
    <div style={{"marginTop":"3rem"}}>
        <h1 style={{"fontSize":"3rem"}}>Login in to InstaShare</h1>
    </div>
    <div style={{"marginTop":"3rem"}}>
        <form method='POST'>
           
            <label htmlFor='email'>Email</label><br/>
            <input id='email' type='text' name='email' value={user.email} onChange={handleChnage} /><br/><br/>

            <label htmlFor='password'>Password</label><br/>
            <input id='password' type='password' name='password' value={user.password} onChange={handleChnage} /><br/><br/>

            <button type='submit' onClick={handleSubmit} className='signup-btn'>Login</button>
        </form>
    </div>
    <div style={{"marginTop":"5rem"}}>
        <h1>Or Login with</h1>
        <div style={{"marginTop":"4rem"}}>
        <img src={Fa} alt='img' style={{"width":"3rem","height":"3rem"}} />
        <img src={Ia} alt='img' style={{"width":"3rem","height":"3rem","marginLeft":"1rem"}} />
        <img src={Ta} alt='img' style={{"width":"3rem","height":"3rem","marginLeft":"1rem"}} />
        </div>
    </div>
    </div>
    <ToastContainer position='top-center' />
    </div>
  )
}

export default Login