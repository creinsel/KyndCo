import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const SignOut = (props) => { 
    return (
        <Button className="sign-out" onClick={props.logout}>
          Sign Out
        </Button>
  
    );
  };

  export default SignOut;