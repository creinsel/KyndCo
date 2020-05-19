import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../utils/API";
import { UserIdContext } from "../../context/UserIdContext";
import { UsernameContext } from "../../context/UsernameContext";
import "./style.css";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const { setUserId } = useContext(UserIdContext);
  const { setUsername } = useContext(UsernameContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    //console.log(formData);
  };

  const handleLogIn = () => {
    setShow(false);

    API.login(formData).then(result => {
      if (result.status === 200) {
        setUserId(result.data._id);
        setUsername(result.data.name);
      }
      //react router go to another pages
    });
  };
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <>
      <a variant="primary" onClick={handleShow}>
        Sign In
      </a>

      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            Sign In to Your Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="/login" method="post">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="form-control password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleLogIn}>Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignIn;
