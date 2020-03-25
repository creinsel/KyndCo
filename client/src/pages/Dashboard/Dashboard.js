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
import { UserContext } from "../../context/UserContext";
import Moment from "react-moment";
import "moment-timezone";
import CanvasJSReact from "../../lib/canvasjs.react";
import Chart from "../../Components/Chart";
import moment from "moment-timezone";
var CanvasJs = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// https://www.npmjs.com/package/react-moment //momentjs style format

const Acts = () => {
  var tempid = "5e7697bc152dbbbcf9992867";
  const [formData, setFormData] = useState({
    task: "",
    category: "",
    points: "",
    description: ""
  });
  const { acts, setActs } = useContext(KindActContext);
  const { userActs, setUserActs } = useContext(UserContext);

  const loadActs = () => {
    API.getKindActs()
      .then(res => setActs(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadActs();
    loadUserActs(tempid);
  }, []);

  const loadUserActs = id => {
    API.getUser(id)
      .then(res => setUserActs(res.data.userActs))
      .catch(err => console.log(err));
    // console.log("userActs:", res.data.userActs);
  };

  // useEffect(() => {
  //   loadUserActs()
  //   ;
  // }, []);

  const deleteKindAct = id => {
    API.deleteKindAct(id)
      .then(res => {
        const remainingActs = acts.filter(act => act._id !== id);
        setActs(remainingActs);
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCompleteAct = event => {
    //const { name, value } = event.target;
    console.log(event.target);
    //  setFormData({
    //    ...formData,
    //    [name]: value
    //  });
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

  const dataPoints = acts.map(act => {
    return {
      label: moment(act.date).format("MM Do YY"),
      y: 5
    };
  });

  return (
    <Container fluid>
      <Nav />
      <Jumbotron>
        <Row>
          <Col size="md-5">
            <Chart dataPoints={dataPoints} />
          </Col>
          <Col size="md-7">
            Recent History from db will go here
            <br />
            <Moment format="MM/DD/YYYY"></Moment>
          </Col>
        </Row>
      </Jumbotron>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Add an Act</h1>
          </Jumbotron>
          <form>
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

        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Acts of Kyndness</h1>
          </Jumbotron>
          {acts.length ? (
            <List>
              {acts.map(act => (
                <ListItem key={act._id}>
                  <Link to={"/acts/" + act._id}>
                    <strong>
                      {act.task} | {act.category} | {act.points} |{" "}
                      {act.description}
                    </strong>
                  </Link>
                  <AddBtn kindAttr={act._id} addAct={handleCompleteAct} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Acts;
