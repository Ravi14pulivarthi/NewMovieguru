import React from "react";
import {Link, useNavigate } from "react-router-dom";

function Navbar(Props) {
   const nav=useNavigate()
   
   function filter(event){
    nav('/search',{state:event.target.value})
   }
    function logout(){
      localStorage.clear()
      nav("/")
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark p-3 bg-gradient ">
        <div className="container-fluid">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeLczOIBI-8XHL_WyDPEvb4JdAXSVJ0u0HA&usqp=CAU"
            alt="Girl in a jacket"
            width="40"
            height="20"
            style={{ borderRadius: "4px" }}
          ></img>

          <a
            style={{ fontFamily: "cursive" }}
            className="navbar-brand"
            href="#"
          >
            <b>MovieGuru</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/mymovies"}>
                  Movies
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to={"/shows"}>
                   Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Kidsworld"}>
               Kidsworld
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/saved"}>
                  Favourites
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action Movies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Serials
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                 onChange={(e)=>{filter(e)}}
                  value={Props.name}
              />
              <button className="btn btn-outline-success" type="submit" onClick={logout}>
              Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
