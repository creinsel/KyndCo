import React, { useContext, useState, useEffect } from "react";
import Nav from "../../Components/Nav";
import Jumbotron from "../../Components/Jumbotron";
import AddBtn from "../../Components/AddBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../Components/Grid";
import { List, ListItem } from "../../Components/List";
import { KyndList, KyndListItem } from "../../Components/KyndList";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import { KindActContext } from "../../context/KindActContext";
import { UserIdContext } from "../../context/UserIdContext";
import { UserContext } from "../../context/UserContext";
import Moment from "react-moment";
import DashBadge from "../../Components/DashBadge";
import "moment-timezone";
import moment from "moment";
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
  const { userId } = useContext(UserIdContext);
  const { userActs, setUserActs } = useContext(UserContext);

  var date = new Date();

  const loadActs = () => {
    API.getKindActs()
      .then(res => setActs(res.data))
      .catch(err => console.log(err));
  };

  const loadCompletedAct = userId => {
    API.getUser(userId)
      .then(res => {
        setUserActs(res.data.kindacts);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadActs();
    if (userId) {
      loadCompletedAct(userId);
    }
  }, [userId]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCompleteAct = (userId, actData) => {
    actData.datePerformed = new Date();
    API.performAct(userId, actData)
      .then(res => loadCompletedAct(userId))
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
            <p className="sub-text">
              Keep track of your completed acts here and the Kyndline Chart
              (left) shows you how kynd you are each day.
            </p>
            <br />
            {/* {console.log("userActs", userActs)} */}
            {userActs.length ? (
              <KyndList>
                {userActs.map((userAct, index) => (
                  <KyndListItem key={index}>
                    <p className="desc">
                      You completed {userAct.task} on{" "}
                      {moment(userAct.datePerformed).format("ll")} at{" "}
                      {moment(userAct.datePerformed).format("LT")}
                    </p>
                  </KyndListItem>
                ))}
              </KyndList>
            ) : (
              <h3>You have not been Kynd....work on that!</h3>
            )}
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
            <p className="sub-text">
              Choose an act to do from our list of acts. Once you have completed
              it, click the <span className="plus-style">+</span> button to add
              it to your Kyndline.
            </p>
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
                    <p className="act-desc">{act.description}</p>
                  </Row>
                  <AddBtn onClick={() => handleCompleteAct(userId, act)} />
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
