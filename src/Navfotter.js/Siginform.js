import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Siginform() {
  const navgate = useNavigate();

  //  to store the  sigin form values  we define states
  const [name, setname] = useState("");
  const [pasword, setpasword] = useState("");
 
  //  this state  will diplay alert
  const [data,setdata]=useState(true)

  function home() {

 // to check the user details correct or not

    if(name === localStorage.getItem("name") && pasword === localStorage.getItem("pasword")){
       setdata(true)
     navgate("/home")
    }
     else{
       setdata(false)
     }
     
  }

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient( rgba(0,0,0,0.3), rgba(0,0,0,2)),url('https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        height: "80vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover ",
        position: "relative",
      }}
    >
        {/* this is alert */}
      {
        !data && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong> Invalied Username(or)Invalied Password</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>)}
        <center><h1 style={{color:"white" ,paddingTop:"59px", fontFamily:"cursive"}} >Sigin<span style={{color:"red"}}>form</span></h1></center>
      <div className="container w-25  p-5 bg-dark text-white my-5 position-absolute  top-50 start-50 translate-middle  ">
        <form>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => {
                setpasword(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button onClick={home} type="button" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Siginform;
