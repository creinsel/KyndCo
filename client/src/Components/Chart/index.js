import React from "react";
import "./style.css";
// import Moment from "react-moment";
// import "moment-timezone";
import CanvasJSReact from "../../lib/canvasjs.react";
import moment from "moment";

var CanvasJs = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = props => {
  const options = {
    animationEnabled: true,
    height: 300,
    title: {
      text: "Your Daily Acts of Kyndness"
    },
    axisX: {
      valueFormatString: "#"
    },
    axisY: {
      title: "# of Acts"
    },
    data: [
      {
        type: "column",
        color: "rgba(54,158,173,.7)",
        yValueFormatString: "#",
        dataPoints: props.dataPoints
      }
    ]
  };
  return (
    <div className="chartContainer">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
