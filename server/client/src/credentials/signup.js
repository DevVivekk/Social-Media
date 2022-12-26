import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({fullname:"",email:"",mobile:"",gender:"",password:"",cpassword:""})
  const handleChnage=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
 setUser({...user,[name]:value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {fullname,email,mobile,gender,password,cpassword} = user;
    const res = await fetch('/register',{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({fullname,email,mobile,gender,password,cpassword})
    });
    if(res.status===201){
      toast.success("Success")
      navigate('/login')
    }else{
      toast.error("Recheck your data and email & mobile are unique!")
    }
  }
  return (
    <div className='signup'>
    <div className='signup-2' style={{"width":"40rem","height":"50rem","display":"flex","alignItems":"center","flexDirection":"column"}}>
    <div style={{"marginTop":"3rem"}}>
        <h1 style={{"fontSize":"3rem"}}>InstaShare</h1>
    </div>
    <div style={{"marginTop":"3rem"}}>
        <form method='POST'>
            <label htmlFor='fullname'>Fullname</label><br/>
            <input id='fullname' type='text' onChange={handleChnage} value={user.fullname} name='fullname' /><br/><br/>

            <label htmlFor='email'>Email</label><br/>
            <input id='email' type='text' onChange={handleChnage} value={user.email} name='email' /><br/><br/>

            <label htmlFor='mobile'>Mobile Number</label><br/>
            <input id='mobile' type='number' onChange={handleChnage} name='mobile' value={user.mobile} /><br/><br/>

            <label htmlFor='male'>Male</label>
            <input style={{"width":"2rem","height":"2rem"}} id='male' type='radio' onChange={handleChnage} value='male' name='gender' />

            <label style={{"marginLeft":"2rem"}} htmlFor='female'>Female</label>
            <input style={{"width":"2rem","height":"2rem"}} id='female' type='radio' onChange={handleChnage} name='gender' value='female' /><br/><br/>

            <label htmlFor='password'>Password</label><br/>
            <input id='password' name='password' onChange={handleChnage} autoComplete='on' type='password' value={user.password}/><br/><br/>

            <label htmlFor='cpassword'>ConfirmPassword</label><br/>
            <input id='cpassword' name='cpassword' type='password' autoComplete='on' onChange={handleChnage} value={user.cpassword} /><br/><br/><br/>

            <button type='submit' onClick={handleSubmit}  className='signup-btn'>Signup</button>
        </form>
    </div>
    </div>
    <ToastContainer position='top-center' />
    </div>
  )
}

export default Signup