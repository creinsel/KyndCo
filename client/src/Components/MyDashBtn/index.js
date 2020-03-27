import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const MyDashBtn = () => { 
    
    const [toDashboard, setToDashboard]= useState(false);

    const goDash = () =>{
        setToDashboard(true)
    }
    return (
        <>
        {toDashboard ? <Redirect to="/dashboard"/> : null}

        <Button variant="primary" onClick={goDash}>
          My Dashboard
        </Button>
        </>
  
    );
  };

  export default MyDashBtn;