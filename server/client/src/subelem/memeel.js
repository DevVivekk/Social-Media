import React, {  useState } from 'react'
import axios from 'axios';
import Memes from '../updates/meme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Memeele = ({social,callsocial}) => {

  const [file, setFile] = useState("");



  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  const submit = async(e)=>{
    if(window.confirm("Please make sure that your uploading meme only!")===true){

    e.preventDefault();
   
    var formData = new FormData();
    formData.append("picture", file);

    const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true 
      }

    const res = await axios.post("/meme", formData, config);

    if (res.status === 201) {
        toast.success("success")
    }else if(res.status===401){
        toast.warn("failed to post")
    }else{
        toast.warn("please recheck!")
    }
    callsocial();
  }
  }

  return (
    <>
    <div className='photoelem' style={{"width":"60rem","height":"90rem","flexDirection":"column","display":"flex","alignItems":"center","overflow":"auto","justifyContent":"space-around"}}>
    <div style={{"overflow":"auto","width":"60rem","paddingLeft":"10rem"}}>
    {
        social.concat().reverse().map(ite=>{
            return(
              <>
            {
                ite.memes.concat().reverse().map(item=>{
                    return(
                        <>
                      <Memes img={item.meme} social={social} />
                        </>
                    )
                })
            }
            </>
            )
        })
    }
   
    </div>
    <div style={{"marginTop":"4rem","width":"50rem","height":"20rem","display":"flex","justifyContent":"center","marginLeft":"0rem","box-shadow": "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"}}>
    <form style={{"paddingTop":"5rem"}}>
    <label>Choose Image</label>
    <input type='file' name='picture' onChange={setimgfile} style={{"paddingTop":".5rem","border":"0px"}}/><br /><br />
    <button type='submit' onClick={submit} style={{"width":"12rem","height":"4rem","fontSize":"1.7rem","fontFamily":"sans-serif","backgroundColor":"hotpink","borderRadius":"4px","fontWeight":"600"}}>Post</button>
    </form>
    </div>
    <ToastContainer  position='top-center' />
    </div>
    </>
  )
}

export default Memeele