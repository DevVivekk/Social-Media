import React, { useEffect, useState } from 'react'
import User from '../media/user.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Image = () => {
  const navigate = useNavigate()
  const [person,setPerson] = useState([])
  const [username,setUsername] = useState("")
  const [file,setFile] = useState("");
  const callApi = async()=>{
    try{

    const res = await fetch('/image',{
      method:"GET",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      }
    })
     const data = await res.json();
     setPerson(data.userImage);
     setUsername(data.fullname)
  }
  catch(e){
    console.log(e);
    navigate('/')
  }}


  useEffect(()=>{
    callApi()
  },[])

useEffect(()=>{
  if(person.length===1){
    navigate('/home')
  }
},[person])


  // IMG ROUTE
  const  imgChange = (e)=>{
    setFile(e.target.files[0]);
  }

  const submitimg = async(e)=>{
    e.preventDefault();
    var formData = new FormData();
    formData.append('photo',file)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      withCredentials: true 
    }
    const res= await axios.post('/registerimage',formData,config,)
    if(res.status===201){
      window.alert('success')
      navigate('/home')
    }else{
      window.alert("failed request")
    }

  }

  return (
    <div className='image-page'>
    <div className='image-box' style={{"display":"flex","alignItems":"center","flexDirection":"column","justifyContent":"center"}}>
    <h1 style={{"marginTop":"-4rem","fontFamily":"sans-serif","fontSize":"2rem"}}>Welcome {username}</h1>
    <h1 style={{"fontSize":"2rem","marginTop":"3rem","fontFamily":"arial"}}>Just add your profile picture and all done.</h1>
    <div style={{"marginTop":"4rem","display":"flex","alignItems":"center","flexDirection":"column"}}>
    <img src={User} alt='img' style={{"width":"8rem","height":"8rem","borderRadius":"50%"}} /><br /><br />
    <form method='POST' encType='multipart/form-data'>
    <input type='file' name='photo' onChange={imgChange}  style={{"paddingTop":"0.4rem"}} placeholder=""/><br /> <br /><br />
    <button onClick={submitimg} className='signup-btn' style={{"backgroundColor":"skyblue","color":"black","borderRadius":"3px"}}>Submit</button>
    </form>
    </div>
    </div>
    {/* {
      person.map((item)=>{
        return(
          <>
            <img src= {`http://localhost:4000/uploads/${item.image}`}  style={{"width":"3rem","height":"3rem"}} alt='img' />
          </>
        )
      })
    } */}
    </div>
  )
}

export default Image