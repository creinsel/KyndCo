import React from "react";
import "./style.css";
import Moment from "react-moment";
import "moment-timezone";
import CanvasJSReact from "../../lib/canvasjs.react";

var CanvasJs = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "How Many Times did you Click?"
    },
    axisY: {
      title: "Number of Clicks"
    },
    data: [
      {
        type: "column",
        color: "rgba(54,158,173,.7)",
        markerSize: 5,
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
