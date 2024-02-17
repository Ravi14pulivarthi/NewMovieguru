import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Fotter from "./Fotter";

function Clickpage() {

   //in order to acces  the data which was send by innerpagecomponent useing use navigat hook, we use uselocation hook
    const location=useLocation()
    const clickpagedata=location.state;
    const nav=useNavigate()
    
// this function is used to navgate video Component and  carries the data from clickpage to videocomponent

    function video(sendingdata){
      nav("/video",{state:sendingdata})
      }
  
  return (
    <div>
 <div style={{backgroundImage:`linear-gradient( to left, rgba(0,0,0,0.1), rgba(0,0,0,1)),url(${clickpagedata.img2})`, height: "80vh",width:"100vw" ,backgroundSize:"cover"}}>
 <div style={{padding:"80px"}}>
 <div style={{color:"white", fontSize:"45px",fontWeight:"bolder",fontFamily:"cursive"}}>{clickpagedata.Moviename}</div><br/>
 <div style={{color:"gray",width:"250px",fontSize:"15px",fontWeight:"bolder",fontFamily:"cursive"}}>{clickpagedata. relese}</div><br/>
 <div style={{color:"white",width:"850px",fontFamily:"cursive"}}>{clickpagedata.description}</div><br/><br/>

  <button onClick={()=>{video(clickpagedata)}}  style={{width:"120px",height:"40px" ,borderRadius:"20px",border:"none",fontFamily:"cursive"}}>Play Triler</button> 
  <button style={{width:"140px",height:"40px" ,borderRadius:"20px",color:"white",backgroundColor:"rgb(214, 89, 12)",border:"none",fontFamily:"cursive"}}>Subscribe now</button>
 </div>

         </div>
         <Fotter/> 
    </div>
  )
}

export default Clickpage