import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connect from './components/connect'
import Header from './components/header'
import Home from './components/home'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
import Page5 from './components/page5'
import Image from './credentials/image'
import Login from './credentials/login'
import Signup from './credentials/signup'
import Logoutt from './credentials/logout'
import Welcome from './comp/welcome'
import HomeHeader from './components/homeheader'
export const Center = () => {

  const [person,setPerson] = useState("");
  const [people,setPeople] = useState([]);
  const [social, setSocial] = useState([]);
  const [desp,setDesp] = useState([])


  const getuserapi = async()=>{
    try{
    const res = await fetch("/image",{
      method:"GET",
      credentials:"include",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
    })
    const data = await res.json();
    setPerson(data.fullname);
    setPeople(data.userImage);
  }
  catch(e){

  }}
  useEffect(()=>{
    getuserapi();
  },[])


  //calling social data

    const callSocial = ()=>{
      fetch("/socialdata")
      .then((res)=>res.json())
      .then((value)=>{
        setSocial(value);
        setDesp(value.descs)
      })
    }
  useEffect(()=>{
    callSocial();
  },[])


  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Header />,<Page1 />,<Home />,<Page2 />,<Page3 />,<Page4 />,<Page5 />,<Connect />]} />
      <Route path='/signup' element={[<Header />,<Signup />]} />
      <Route path='/login' element={[<Header />,<Login />]} />
      <Route path='/uploadimage' element={<Image />} />
      <Route path='/home' element={[<HomeHeader /> ,<Welcome person={person} people={people} social={social} desp={desp} callSocial={callSocial} getuser = {getuserapi}/>]} />
      <Route path='/logoutt' element={<Logoutt />} />
    </Routes>
   </BrowserRouter>
    </>
  )
}
