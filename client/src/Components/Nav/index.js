import React, { useContext } from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import { UserIdContext } from "../../context/UserIdContext";
import { UsernameContext } from "../../context/UsernameContext";
import {UserPointsContext} from "../../context/UserPointsContext";
import MyDashBtn from "../MyDashBtn";
import "./style.css";

const Nav = () => {
  const { userId, setUserId } = useContext(UserIdContext);
  const { username } = useContext(UsernameContext);
  const {userPoints} = useContext(UserPointsContext);

  return (
    <header id="header" className="fixed-top">
      <div class="container-fluid d-flex">
        <div className="logo mr-auto">
          {/* Link for app logo? */}
          <a href="/">
            <img
              src="assets/images/kyndco-logo.png"
              alt="logo"
              class="img-fluid kynd-img"
            />
          </a>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark  d-lg-block nav-menu">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Not sure what this is for below */}
            {/* <ul className="navbar-nav mr-auto">
          </ul>  */}

      <ul className="nav navbar-nav">

        { userId ? (
      <li className="nav-item">Hello {username}! | Total points: { userId ? userPoints : 0}</li>
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
};

export default Nav;
