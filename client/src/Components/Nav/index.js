import React from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn"


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <a className="navbar-brand" href="/">
        <img src ="assets/images/kyndco-logo.png" alt="logo"/>
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      </ul>
      <ul className="nav navbar-nav">
    
      
      <li className="nav-item">
        <div className = "m-1"><SignIn/></div>
        {/* <a className="nav-link" href="/signIn" onClick ={() => SignIn.setModalShow(true)} ><div className= "btn btn-primary"> Sign In</div></a> */}
      </li>
      <li className="nav-item">
      <div className = "m-1"><SignUp/></div>
        {/* <a className="nav-link" href="/signUp"><div className= "btn btn-primary"> Sign Up</div></a> */}
       
      </li>
    
    </ul>
  
  </div>
  


    </nav>
  );
}

export default Nav;