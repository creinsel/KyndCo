import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../utils/API";
import { UserIdContext } from '../../context/UserIdContext';
import { SignInContext } from '../../context/SigninContext';

const SignIn = () => {
    const [show, setShow] = useState(false);
    const { setUserId } = useContext(UserIdContext);
    const { setSignIn } = useContext(SignInContext);

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
     
      API.login(formData)
      .then(res => {
        console.log("login")
        //react router go to another page
      })

      API.getUser(id)
      .then(res => {
        console.log("get user: ", res.data)

        // if(formData.email === res.data.email)
        setSignIn(true);
        setUserId(id);
       

      }
      )
      .catch(err => console.log(err));

      
     
    }
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Sign In
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In to Your Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
  <div className="form-group">
    <label for="Email">Email</label>
    <input type="text" name= "email"className="form-control email" name= "email" value= {formData.email} onChange={handleInputChange} placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="Password">Password</label>
    <input type="text" className="form-control password"  name= "password" value= {formData.password} onChange={handleInputChange} placeholder="Password"/>
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
  export default SignIn;