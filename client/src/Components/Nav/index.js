import React, {useContext} from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import SignOut from "../SignOut"
import {UserIdContext} from "../../context/UserIdContext";

//how would log out go here? context--> userIDcontext--> dependent on state show signin signup logout
const Nav = () => {
  const {userId, setUserId} = useContext(UserIdContext);
  
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
      <div className = "m-1">{userId ? <SignOut logout={() => setUserId("")} /> :<SignIn/>}</div>
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