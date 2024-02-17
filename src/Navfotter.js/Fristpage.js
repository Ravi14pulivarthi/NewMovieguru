import React from "react";
import "./Frist.css";
 import Fotter from './Fotter'
import {useNavigate} from "react-router-dom";



function Fristpage () {

  const pagenav=useNavigate()

   function navrigister(){
  pagenav("/registerform")
   }
    function sigin(){
      pagenav("/siginform")
    }

  return (
    <div>
   
      <div
        className="ravi"
        style={{ backgroundImage:"linear-gradient( rgba(0,0,0,0.3), rgba(0,0,0,2)),url('https://cosmosgroup.sgp1.digitaloceanspaces.com/news/4256751.webp')", height: "120vh",}}>
        
              <div style={{position:"relative"}}>
                <h1 style={{color:"white",fontSize:"50px",fontFamily:"cursive", paddingLeft:"100px",paddingTop:"50px"}}>Movie<span style={{color:"red"}}>Guru</span></h1>
              <button onClick={sigin} style={{position:"absolute",left:"90%",top:"60%",width:"100px",height:"40px",border:"none",borderRadius:"5px",backgroundColor:"red",color:"white",fontWeight:"bolder",fontSize:"20px"}}>Log-in </button>
              </div>
    


        <center className="one1">
          <h1 className="one2">
            The biggest Indian hits. Ready to watch here from <br />₹ 149.
          </h1>
          <h5>Join today. Cancel anytime.</h5>
          <h6>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h6><br/>
           <button onClick={navrigister} style={{backgroundColor:"red",width:"200px", color:"white",border:"none",borderRadius:"4px",padding:"10px",fontWeight:"bolder"}}>Join with us</button>
        </center>
      </div>
      <hr className="two" style={{ height: "8px" }}></hr>
     
       {/* frist */}
       

 <div className="three">
  <center className="three1"> <h1>Enjoy on your TV</h1>
   <p>Watch on smart TVs, PlayStation, Xbox, Chromecast,<br/> Apple TV, Blu-ray players and more.</p></center>
<div> <img src="https://cinebuds.com/wp-content/uploads/2020/12/Amazon-Prime-Upcoming-Telugu-Movies.jpg" width="400" height="300px"style={{ borderRadius: "4px" }}></img>
</div>
 </div><br/><br/><br/><br/><br/>
 <hr className="two" style={{ height: "8px" }}></hr>

 {/* <second */}

<div className="four">
<div> <img src="https://assets.mspimages.in/gear/wp-content/uploads/2022/08/netflix-3.jpg" width="400" height="300px"style={{ borderRadius: "4px" }}></img></div>
<center className="three1"> <h1>Download your shows to watch offline</h1>
<p>Save your favourites easily and always have <br/> something to watch.</p></center>

 {/*  third */}

</div><br/><br/><br/><br/><br/>
 <hr className="two" style={{ height: "8px" }}></hr>
 
 <div className="three">
  <center className="three1"> <h1>Watch everywhere</h1>
   <p>Stream unlimited movies and TV shows on your <br/> phone, tablet, laptop, and TV.</p></center>
<div> <img src="https://miro.medium.com/v2/resize:fit:1400/0*V611RSn27VAH-DnP" width="400" height="300px"style={{ borderRadius: "4px" }}></img>
</div>
 </div><br/><br/><br/><br/><br/>

  {/*  fourth*/}


 <hr className="two" style={{ height: "8px" }}></hr>

 <div className="four">
<div> <img src="https://occ-0-5261-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" width="400" height="300px"style={{ borderRadius: "4px" }}></img></div>
<center className="three1"> <h1>Create profiles for kids</h1>
<p>Send children on adventures with their favourite<br/>characters in a space made just for them—free with<br/>your membership.</p></center>

</div><br/><br/><br/><br/><br/>
 <hr className="two" style={{ height: "8px" }}></hr>
 <br/>  <br/>  <br/>


    {/* dropdown */}

     <center style={{color:"white", fontSize:"39px",fontWeight:"bolder"}}>Frequently Asked Questions</center>
     <br/>  <br/>
  <div>
  <div className=" container accordion accordion-flush w-75 " id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="  bg-dark text-white  accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
   what is movieguru
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bg-dark text-white ">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className=" bg-dark text-white  accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
    How much it cost 
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bg-dark text-white ">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className=" bg-dark text-white accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
  Where i can watch
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bg-dark text-white ">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className=" bg-dark text-white accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
  How can i Cancel
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bg-dark text-white ">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className=" bg-dark text-white accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
       What can i watch in Movieguru
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bg-dark text-white ">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className=" bg-dark text-white accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
        Is Movieguru is good for kids 
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bg-dark text-white ">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
  </div>

<Fotter/>

    </div>
  
  );
}

export default Fristpage;
