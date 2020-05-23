import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import { UserIdContext } from "../../context/UserIdContext";
import { UserPointsContext } from "../../context/UserPointsContext";
import { UsernameContext } from "../../context/UsernameContext";
import MyDashBtn from "../MyDashBtn";
import API from "../../utils/API";
import "./style.css";

const Nav = () => {
  const { userId, setUserId } = useContext(UserIdContext);
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  const [toHome, setToHome] = useState(false);
  const { username } = useContext(UsernameContext);

  const calcUserPoints = (userId) => {
    API.getUser(userId)
      .then((res) => {
        var tempScore = 0;
        const calcUserPoints = res.data.kindacts.map((act) => {
          return (tempScore += act.points);
        });
        if (calcUserPoints.length === 0) {
          setUserPoints(0);
        } else {
          setUserPoints(calcUserPoints.slice(-1).pop());
        }
      })
      .catch((err) => console.log(err));

    API.updateUser(userId, userPoints);
  };

  useEffect(() => {
    if (userId) {
      calcUserPoints(userId);
    }
  }, [userId]);

  const handleLogo = () => {
    setToHome(true);
  };

  return (
    <header id="header" className="fixed-top">
      <div class="container-fluid d-flex">
        {toHome ? <Redirect to="/" /> : null}

        <div className="logo mr-auto">
          {/* Link for app logo? */}

          <img
            src="assets/images/kyndco-logo.png"
            alt="logo"
            class="img-fluid kynd-img"
            onClick={handleLogo}
          />
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark  d-lg-block nav-menu">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Not sure what this is for below */}
            {/* <ul className="navbar-nav mr-auto">
          </ul>  */}
            <ul className="nav navbar-nav">
              {userId ? (
                <li className="nav-item">
                  Hello {username}! | {userId ? userPoints : 0} points
                </li>
              ) : (
                <span></span>
              )}

              <li className="nav-item">
                <div className="m-1 get-started">
                  {userId ? (
                    <SignOut logout={() => setUserId("")} />
                  ) : (
                    <SignIn />
                  )}
                </div>
                {/* <a className="nav-link" href="/signIn" onClick ={() => SignIn.setModalShow(true)} ><div className= "btn btn-primary"> Sign In</div></a> */}
              </li>
              <li className="nav-item">
                <div className="m-1 get-started">
                  {userId ? <MyDashBtn /> : <SignUp />}
                </div>

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
