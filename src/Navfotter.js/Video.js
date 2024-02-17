import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
function Video() { 
  //in order to acces  the data which was send by clickpage component useing use navigat hook, we use uselocation hook
  
  const location=useLocation()
  const videodata=location.state

  return (
    <div className='container position-relative w-75 '>
    
      {/* <video width="950" height="500" controls >
      <source src="https://youtu.be/l9WIUq21HN4?si=dHAS0zQ1h8El5HkK" type="video/mp4"/>
     </video> */}

{/* to display the video */}
<ReactPlayer
            className='react-player fixed-top'
            url={ videodata.video}
            width='80%'
            height='80%'

            controls = {true}  style={{paddingLeft:"300px",paddingTop:"150px",borderRadius:"10px"}}

            />

     {/* <iframe style={{position:"absolute",top:"70px",borderRadius:"20px"}} width="100%" height="595" src={ videodata.video} title="Ayyayyo Sad Version | Mem Famous | Sumanth Prabhas | Rahul Sipligunj |Chai Bisket Films|Lahari Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

     
    </div>
  )
}

export default Video