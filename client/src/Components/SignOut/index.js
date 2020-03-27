import React from "react";
import { Button } from "react-bootstrap";

const SignOut = (props) => { 
    return (
        <Button variant="danger" onClick={props.logout}>
          Sign Out
        </Button>
  
    );
  };

  export default SignOut;