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
      text: "Stock Price of NIFTY 50"
    },
    axisY: {
      title: "Price in USD",
      prefix: "$",
      includeZero: false
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

module.exports = Chart;
