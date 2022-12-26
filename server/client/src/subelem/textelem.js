import React, { useState } from 'react'
import Text from '../updates/text'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Textelem = ({social,callSocial}) => {
    const [user,setUser] = useState({text:""});
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {text} = user;
        const res = await fetch('/posttext',{
            method:"POST",
            credentials:"include",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({text})
        })
        if(res.status===201){
            toast.success("Success!")
        }else{
            toast.warn("Please recheck!")
        }
        callSocial();
     }
  


  return (
<div className='main-div' style={{"width":"60rem","height":"70rem","display":"flex","flexDirection":"column"}}>
    <div style={{"overflow":"auto"}}>
    {
      social.concat().reverse().map((item)=>{
        return(
          <>
       
          {
            item.texts.concat().reverse().map(ite=>{
              return(
                <>
                <Text post={ite.text} />
                </>
              )
            })
          }
          </>
        )
      })
    }
    </div>
    <div style={{"marginLeft":"4rem"}}>
      <form method='POST'>
        <input type='text' placeholder="Type your post" style={{"width":"40rem","height":"7rem","fontSize":"2rem"}} name='text' value={user.text} onChange={handleChange}  /><br/><br/><br/>
        <button type='submit' onClick={handleSubmit} style={{"width":"12rem","height":"4rem","backgroundColor":"hotpink","borderRadius":"4px","fontFamily":"sans-serif","fontSize":"1.6rem"}}>Post</button>
      </form>
    </div>
    <ToastContainer  position='top-center' />
    </div>
  )
}

export default Textelem