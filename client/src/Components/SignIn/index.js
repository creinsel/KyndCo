
import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../utils/API";
import { UserIdContext } from '../../context/UserIdContext';
// import { Redirect } from "react-router-dom";

const SignIn = () => {
    const [show, setShow] = useState(false);
    const { setUserId } = useContext(UserIdContext);
    // const [toDashboard, setToDashboard]= useState(false);

    const [formData, setFormData] = useState({
      email: "",
      password: ""
    });

    var id=localStorage.getItem("userId");

    const handleInputChange = event => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
      console.log(formData);
    };
  
 
  
    const handleClose = () => {
      setShow(false);
     console.log("handle close")
      API.login(formData)
      .then(result => {
        console.log("login", result)
        if(result.status===200){
          setUserId(result.data._id)
        }
        
        //react router go to another pages
      })

    //   API.getUser(id)
    //   .then(res => {
    //     console.log("get user: ", res.data)

    //   if(formData.email === res.data.email){
      
    //   setUserId(res.data._id)
    // console.log("setui: ",setUserId(res.data._id))  ;
    //   console.log("success");
    //   setToDashboard(true);
    //   }else{
    //     console.log("nope")
    //   }
        
       

    //   }
    //   )
    //   .catch(err => console.log(err));

      
     

    }
    const handleShow = () => setShow(true);
  
    return (
      <>


      {/* {toDashboard ? <Redirect to="/dashboard"/> : null} */}

        <Button variant="primary" onClick={handleShow}>
          Sign In
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In to Your Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <form action="/login" method="post">
  <div className="form-group">
    <label for="Email">Email</label>
    <input type="text" className="form-control email" name= "email" value= {formData.email} onChange={handleInputChange} placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="Password">Password</label>
    <input type="password" className="form-control password"  name= "password" value= {formData.password} onChange={handleInputChange} placeholder="Password"/>

  </div>
 
</form>
          </Modal.Body>
          <Modal.Footer>

            <Button  onClick={handleClose} >
              Login
            </Button>
            

          </Modal.Footer>
        </Modal>
      </>
    );

    
  };

  export default SignIn