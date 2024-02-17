// import React, { useContext } from 'react'
// import Contaxt from './Contaxt'
// import { useNavigate } from 'react-router-dom'

// function Saved() {
//    const navgate= useNavigate()
//      const {data,setdata}=useContext(Contaxt)
       
//        function ravi(sendingdata){
        
//         navgate(`/clickpage/${sendingdata.Moviename}`,{state:sendingdata})   
//      }
//   return (
//     <div>
//  <div  style={{display:"flex"}}>     
//    {
//     data.map((value,index)=>{
//       return(<div key={index}>
//         {
//           typeof value === typeof null && <div> <div onClick={ function (){ravi(value)}} style={{width: "10rem",height:"18rem",backgroundImage:`url(${value.img1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"10px"}} >
//           <span style={{backgroundColor:"orange",width:"90px",color:"white",borderRadius:"0px 10px 0px 10px" ,textAlign:"center", position:"relative",left:"83px"}}>Primemum</span>
          
//           </div>
//          <div><p style={{color:"white" ,width:"170px",fontFamily:"cursive"}}>{value.Moviename} </p></div></div>
//         }
//       </div>)
//     })
//    }  
//  </div> 
//     </div>
//   )
// }

// export default Saved