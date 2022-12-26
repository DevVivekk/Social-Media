import React, { useEffect, useState } from 'react'
import Memeele from '../subelem/memeel';
import Photoelem from '../subelem/photoelem';
import Textelem from '../subelem/textelem';
const Welcome = ({people,person,social,callSocial,getuser,desp}) => {
 
useEffect(()=>{
  getuser();
},[])

  const [texthide,setTexthide] = useState(true)
  const [photgraph,setPhotograph] = useState(false)
  const [meme,setMeme] = useState(false);

  //functions for photographic
  const setphoto = ()=>{
    setTexthide(false);
    setPhotograph(true)
    setMeme(false);
  }
  const settext = ()=>{
    setTexthide(true);
    setPhotograph(false)
    setMeme(false);
  }

  const setmemee  = ()=>{
    setTexthide(false)
    setPhotograph(false)
    setMeme(true);
  }
 
  return (
    <div className='welcome'>
    <div>
    <div className='nav' style={{"width":"100vw","minWidth":"50rem","display":"flex","flexDirection":"row","justifyContent":"space-around","height":"auto"}}>
    <div style={{"display":"flex","flexDirection":"row"}}>
      <h1 style={{"marginTop":"2.5rem","fontSize":"2.5rem","fontFamily":"sans-serif"}}>Hi, {person}</h1>
      {
      social.map((item)=>{
        return(
          <>
         {
          item.userImage.map(val=>{
            return(
              <>
             {
              val.image.map(va=>{
                return(
                  <>
                  <img src= {`/uploads/${va}`}  style={{"width":"6rem","height":"6rem","borderRadius":"50%","marginTop":"1rem","marginLeft":"4rem","marginRight":"4rem"}} alt='img' />
                  </>
                )
              })
             }
              </>
            )
          })
         }
          </>
        )
      })
    }
    </div>
    <h1  style={{"height":"6rem","borderRadius":"6rem","fontSize":"3rem","padding":"0rem","marginTop":"2.5rem"}}><span style={{"color":"blueviolet"}}>InstaShare</span></h1>
    </div>
    </div>
    <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-evenly","flexWrap":"wrap","overflow":"auto","height":"auto","marginTop":"5rem"}}>
    <div style={{"width":"40rem","height":"20rem","marginLeft":"4rem","marginTop":"5rem"}}>
      <button className='home-btn' onClick={settext}>Textual Updates</button><br/><br/>
      <button onClick={setphoto} className='home-btn'>Photgraphic Updates</button><br/><br/>
      <button onClick={setmemee} className='home-btn'>Memes</button><br/><br/>
    </div>
   {
    texthide? <Textelem social={social} callSocial={callSocial} />
    :null
   }
   {
    photgraph?<Photoelem social={social} desp={desp} callSocial={callSocial} />
    :null
   }

   {
    meme?<Memeele social={social} callsocial={callSocial} />
    :null
   }
    </div>
   </div>
  )
}

export default Welcome