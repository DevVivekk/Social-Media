import React, {   useState } from 'react'
import Photos from '../updates/photos'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Photoelem = ({social,callsocial}) => {
    const [desc,setDesc] = useState("");
  const [file, setFile] = useState("");

  const setdata = (e) => {
    const value = e.target.value;
    setDesc(value);
  }

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  const submit = async(e)=>{
    e.preventDefault();
    if(desc==="" || file===""){
        window.alert("cannot send empty value")
    }
    var formData = new FormData();
    formData.append("picture", file);
    formData.append("desc", desc);

    const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true 
      }

    const res = await axios.post("/photo", formData, config);

    if (res.status === 201) {
        toast.success("success. Please refresh the page!")
    }else if(res.status===401){
        toast.warn("failed to post")
    }else{
        toast.warn("please recheck!")
    }
    callsocial()
  }


  return (
    <>
    <div className='photoelem' style={{"width":"60rem","height":"90rem","flexDirection":"column","display":"flex","alignItems":"center","overflow":"auto","justifyContent":"space-around"}}>
    <div style={{"overflow":"auto","width":"60rem","paddingLeft":"10rem"}}>
    {
        social.map(ite=>{
            return(
              <>
            {
                ite.photos.concat().reverse().map(item=>{
                    return(
                        <>
                      <Photos img={item.photo} social={social} />
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
    <form>
    <label>Choose Image</label>
    <input type='file' name='picture' onChange={setimgfile} style={{"paddingTop":".5rem","border":"0px"}}/><br /><br />
    <label>Write Caption</label>
    <input type='text' name='desc' onChange={setdata} style={{"width":"25rem","height":"5rem"}}/><br/><br />
    <button type='submit' onClick={submit} style={{"width":"12rem","height":"4rem","fontSize":"1.7rem","fontFamily":"sans-serif","backgroundColor":"hotpink","borderRadius":"4px","fontWeight":"600"}}>Post</button>
    </form>
    </div>
    </div>
    <ToastContainer position='top-center'/>
    </>
  )
}

export default Photoelem