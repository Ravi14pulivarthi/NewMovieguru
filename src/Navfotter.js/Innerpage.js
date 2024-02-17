import React, {useState,useContext} from "react";
 import './innerpage.css'
import { useNavigate } from "react-router-dom";
// import Contaxt from './Contaxt'


function Innerpage(Props) {
      const navgate=useNavigate()
      // const {data,setdata}=useContext(Contaxt)

      // this function is used to navgate clickpage Component and  carries the data from innerpage to clickpage
       function click(sendingdata){
        
        navgate(`/clickpage/${sendingdata.Moviename}`,{state:sendingdata})  
     }

    

    
  return (
   <div>
     <div style={{display:"flex"}}>   
         {
      Props.Moviegurudata.map((values,index)=>{
        return(
            <div className="mainimg" style={{cursor:"pointer"}}  key={index} >
            <div onClick={ function (){click(values)}} style={{width: "10rem",height:"18rem",backgroundImage:`url(${values.img1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"10px",alignItems:"center"}} >
            <span style={{backgroundColor:"orange",width:"90px",color:"white",borderRadius:"0px 10px 0px 10px" ,textAlign:"center", position:"relative",left:"83px"}}>Primemum</span>
            
            </div>
           <div><p style={{color:"white" ,width:"170px",fontFamily:"cursive"}}>{values.Moviename}</p>
    
           </div>
         
          
          </div>
        )
    })
}
   </div>
   </div>
   
  );

}

export default Innerpage;















// .sort(function(a,b){ if(a.Moviename>b.Moviename){return 1}
//           if(a.Moviename<b.Moviename){ return -1}
//            return 0;})
        {/* <i onClick={()=>{favorite(values)}} className="fa-solid fa-star"></i> */}
           // function favorite(saved){
      //   saved.toggle=!saved.toggle
      // setdata([
      //   data.push(saved),...data
      // ])
      // }