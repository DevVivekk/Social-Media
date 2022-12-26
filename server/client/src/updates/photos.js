import React from 'react'
const Photos = ({img,social}) => {
  return (
    <div className='photosele' style={{"width":"35rem","height":"42rem","borderRadius":"4rem","marginBottom":"4rem"}}>
    <img src= {`http://localhost:4000/uploads/${img}`} style={{"width":"35rem","height":"36rem","borderRadius":"4rem"}} alt='img' />
    {
      social.map(val=>{
        return(
          <>
            {
              val.descs.map(item=>{
                return(
                  <>
                  {/* <h1 style={{"marginLeft":"2rem","marginTop":"1rem","fontSize":"1.2rem"}}>Caption✌ : <span style={{"fontFamily":"Arial","fontSize":"1.5rem"}}>{item.desc}</span></h1> */}
                  </>
                )
              })
            }
          </>
        )
      })
    }
    </div>
  )
}

export default Photos