import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';

const SignUp = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    const handleClose = () => {
setShow(false); 

const {name, email, password} = formData;

// if(name && email && password)
// API.saveUser({
//   name,
//   points: 0,
//   email,
//   password
// })
//   .then(res => {
//     // need to add more stuff here
//   })
//   .catch(err => console.log(err));

    } 

    const handleInputChange = event => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      })
    };
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Sign Up
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create A New Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
  <div className="form-group">
    <label for="Name">Name</label>
    <input type="text" className="form-control" placeholder="Name" value= {formdata.name} onChange={handleInputChange}/>
  </div>
  <div className="form-group">
    <label for="Email">Email</label>
    <input type="text" class="form-control"  placeholder="Email" value= {formdata.email} onChange={handleInputChange}/>
  </div>
  <div className="form-group">
    <label for="Passwprd">Password</label>
    <input type="text" className="form-control"  placeholder="Password" value= {formdata.password} onChange={handleInputChange}/>
  </div>
</form>
</Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={handleClose} href="/userAccount">
              SignUp
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default SignUp;