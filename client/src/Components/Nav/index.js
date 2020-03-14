import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-whitet">
      <a className="navbar-brand" href="/">
        <img src ="assets/images/kyndco-logo.png"/>
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      </ul>
      <ul className="nav navbar-nav">
    
      
      <li className="nav-item">
        <a className="nav-link" href="/signIn"><div className= "btn btn-primary"> Sign In</div></a>
      </li>
      <li className="nav-item">
      
        <a className="nav-link" href="/signUp"><div className= "btn btn-primary"> Sign Up</div></a>
       
      </li>
    
    </ul>
  
  </div>
  


    </nav>
  );
}

export default Nav;