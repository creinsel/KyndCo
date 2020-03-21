import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import API from "../../utils/API"

const SignUp = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });

    const loadUser = () => {
      API.getUser()
        .then(res => {
          setFormData(res.data)
        }
        )
        .catch(err => console.log(err));
    };
      const handleInputChange = event => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      })
    };
  
    const handleClose = () => {
    

setShow(false); 

const {name, email, password} = formData;

if(name && email && password)
API.saveUser({
  name,
  points: 0,
  email,
  password, 
  acts: []
})
  .then(res => {
   loadUser();
  })
  .catch(err => console.log(err));

    } 

  
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
    <input type="text" className="form-control" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange}/>
  </div>
  <div className="form-group">
    <label for="Email">Email</label>
    <input type="text" class="form-control"  placeholder="Email" name="email" value={formData.email} onChange={handleInputChange}/>
  </div>
  <div className="form-group">
    <label for="Passwprd">Password</label>
      <input type="text" className="form-control"  placeholder="Password" value= {formdata.password} onChange={handleInputChange}/>

  </div>
</form>
</Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={handleClose} href="/create">
              SignUp
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default SignUp;