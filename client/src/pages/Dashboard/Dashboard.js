import React, { useContext, useState, useEffect } from "react";
import Nav from "../../Components/Nav";
import Jumbotron from "../../Components/Jumbotron";
import AddBtn from "../../Components/AddBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import { KindActContext } from "../../context/KindActContext";
import { UserIdContext } from "../../context/UserIdContext";
import Moment from "react-moment";
import DashBadge from "../../Components/DashBadge";
import "moment-timezone";
import CanvasJSReact from "../../lib/canvasjs.react";
import Chart from "../../Components/Chart";
import "./style.css";
var CanvasJs = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// https://www.npmjs.com/package/react-moment //momentjs style format

const Acts = () => {
  // var id = localStorage.getItem("userId");
  // var tempid = id;

  const [formData, setFormData] = useState({
    task: "",
    category: "",
    points: "",
    description: ""
  });
  const { acts, setActs } = useContext(KindActContext);
  const { userId, setUserId } = useContext(UserIdContext);

  const loadActs = () => {
    API.getKindActs()
      .then(res => setActs(res.data))
      .catch(err => console.log(err));
  };

  // console.log("tempid", tempid);
  useEffect(() => {
    loadActs();
  }, []);

  // const deleteKindAct = id => {
  //   API.deleteKindAct(id)
  //     .then(res => {
  //       const remainingActs = acts.filter(act => act._id !== id);
  //       setActs(remainingActs);
  //     })
  //     .catch(err => console.log(err));
  // };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCompleteAct = (userId, actData) => {
    API.performAct(userId, actData)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const { task, category, points, description } = formData;

    if (task && category && points && description) {
      API.saveAct({
        task,
        category,
        points,
        description
      })
        .then(res => loadActs())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Nav />
      <div className="acts-header">
        <Row>
          <Col size="md-5">
            <Chart />
          </Col>
          <Col size="md-7">
            <h1>Your Kyndline</h1>
            <br />
            <p className="todays-date">
              Today's date is <Moment format="MM/DD/YYYY"></Moment>
            </p>
          </Col>
        </Row>
      </div>

      <Container></Container>
      <Row>
        <Col size="md-5">
          <div className="section-header">
            <h1>Add an Act</h1>
            <p className="sub-text">
              Don't see an act you want to do? Simply fill out the form and
              yours will be added to the Acts of Kyndness on the right.
            </p>
          </div>
          <br />
          <form className="form-container">
            <Input
              value={formData.task}
              onChange={handleInputChange}
              name="task"
              placeholder="Task (required)"
            />
            <Input
              value={formData.category}
              onChange={handleInputChange}
              name="category"
              placeholder="Category - Yourself | Others | The World (required)"
            />
            <Input
              value={formData.points}
              onChange={handleInputChange}
              name="points"
              placeholder="Points (Required)"
            />
            <TextArea
              value={formData.description}
              onChange={handleInputChange}
              name="description"
              placeholder="Description (Required)"
            />
            <FormBtn
              disabled={
                !(
                  formData.task &&
                  formData.category &&
                  formData.points &&
                  formData.description
                )
              }
              onClick={handleFormSubmit}
            >
              Add Act
            </FormBtn>
          </form>
        </Col>

        <Col size="md-5">
          <div className="section-header">
            <h1>Acts of Kyndness</h1>
          </div>
          {acts.length ? (
            <List>
              {acts.map(act => (
                <ListItem key={act._id}>
                  <Row>
                    <h3 className="act-title">{act.task}</h3>
                    <p className="bar">|</p>
                    <h3 className="act-cat">{act.category}</h3>
                    <p className="bar">|</p>
                    <h3 className="act-pts">{act.points}</h3>
                  </Row>
                  <Row>
                    <p className="desc">{act.description}</p>
                  </Row>
                  <AddBtn onClick={() => handleCompleteAct(userId, act._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
        <Col size="md-2">
          <div className="section-header">
            <h1>Badges</h1>
            <DashBadge />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Acts;
