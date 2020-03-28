import React, { useContext } from "react";
import "./style.css";
import Moment from "react-moment";
import "moment-timezone";
import CanvasJSReact from "../../lib/canvasjs.react";
import { UserContext } from "../../context/UserContext";

var CanvasJs = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const { userActs } = useContext(UserContext);

  const filterByDate = () => {};

  const options = {
    animationEnabled: true,
    title: {
      text: "Charting Your Kyndline"
    },
    axisY: {
      title: "Acts completed"
    },
    data: [
      {
        type: "column",
        yValueFormatString: "#",
        dataPoints: [
          { x: <Moment format="MM/DD/YYYY"></Moment>, y: 5 },
          { x: <Moment format="MM/DD/YYYY"></Moment>, y: 15 }
        ]
      }
    ]
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
