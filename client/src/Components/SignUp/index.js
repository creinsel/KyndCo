import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../utils/API";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // or
  // const bcrypt = require('bcrypt')

  // const loadUser = () => {
  //   API.getUser()
  //     .then(res => {
  //       setFormData(res.data)
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // console.log(formData);
  };

  const handleClose = () => {
    setShow(false);
    // console.log({formData})
    const { name, email, password } = formData;

    if (name && email && password)
      API.saveUser({
        name,
        points: 0,
        email,
        password,
        act: []
      })
        .then(res => {
          // const password = formData.password
          // const rounds = 10

          var userId = res.data._id;

          localStorage.setItem("userId", userId);
        })
        .catch(err => console.log(err));
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <a variant="primary" onClick={handleShow}>
        Sign Up
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            Create A New Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label for="Name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="Email">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
