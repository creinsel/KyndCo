import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';

const SignIn = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      setShow(false);
      //get request
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
    <label for="Name">Name</label>
    <input type="text" className="form-control" placeholder="Name"/>
  </div>
  <div className="form-group">
    <label for="Email">Email</label>
    <input type="text" className="form-control"  placeholder="Email"/>
  </div>
 
</form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default SignIn;