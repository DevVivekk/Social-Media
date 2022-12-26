import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logoutt() {
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            credentials:"include",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
        }).then((res)=>{
            navigate('/',{replace:true})
            if(res.status !==201){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((e)=>{
            console.log(e);
        })
    },[])
  return (
    <div>
        <h1>Your are being logout.....</h1>
    </div>
  )
}

export default Logoutt