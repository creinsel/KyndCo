import React, {useContext, useState} from "react";
import { Redirect } from "react-router-dom";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import SignOut from "../SignOut"
import {UserIdContext} from "../../context/UserIdContext";
import {UserPointsContext} from "../../context/UserPointsContext";
import MyDashBtn from "../MyDashBtn";
import "./style.css";


const Nav = () => {
  const {userId, setUserId} = useContext(UserIdContext);
  const {userPoints} = useContext(UserPointsContext);
  const [toHome, setToHome]= useState(false);

  // const calcUserPoints = () => {
  //   return userPoints.reduce((totalUserPoints, userPoint) => {
  //     return book.likes ? book.likes + totalLikes : totalLikes;
  //   }, 0);
  // }

  const handleLogo = () => {
    setToHome(true);
  }
  
  return (
    <header id="header" className= "fixed-top">
      <div class="container-fluid d-flex">
      {toHome ? <Redirect to="/"/> : null}

        <div className="logo mr-auto">
         
          {/* Link for app logo? */}
          
        <img src ="assets/images/kyndco-logo.png" alt="logo" class="img-fluid kynd-img" onClick={handleLogo}/>
       
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark  d-lg-block nav-menu">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
            {/* Not sure what this is for below */}
           {/* <ul className="navbar-nav mr-auto">
          </ul>  */}
      <ul className="nav navbar-nav">

        { userId ? (
      <li className="nav-item">

        Total points: { userId ? userPoints : 0}
      </li>
        )
        :
        <span></span>
      }

      <li className="nav-item">
      <div className = "m-1 get-started">{userId ? <SignOut logout={() => setUserId("")} /> :<SignIn/>}</div>
        {/* <a className="nav-link" href="/signIn" onClick ={() => SignIn.setModalShow(true)} ><div className= "btn btn-primary"> Sign In</div></a> */}
      </li>
      <li className="nav-item">
  <div className = "m-1 get-started">{userId ? <MyDashBtn/> :<SignUp/>}</div>

        {/* <a className="nav-link" href="/signUp"><div className= "btn btn-primary"> Sign Up</div></a> */}
       </li>
    
    </ul>
  
  </div>
  


    </nav>
    </div>
    </header>
  );
}

export default Nav;