import React from "react";
import "./style.css";
import Moment from "react-moment";
import "moment-timezone";

const Chart = () => {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "How Many Times did you Click?"
    },
    axisY: {
      title: "Number of Clicks"
    },
    data: [
      {
        type: "area",
        color: "rgba(54,158,173,.7)",
        markerSize: 5,
        xValueType: "dateTime",
        xValueFormatString: "MM Do YYYY",
        yValueFormatString: "#",
        dataPoints: [
          { x: new Date(2000, 0, 4), y: 3289000 },
          { x: new Date(2001, 5, 14), y: 3830000 },
          { x: new Date(2002, 9, 19), y: 2009000 },
          { x: new Date(2003, 6, 2), y: 2840000 },
          { x: new Date(2004, 2, 28), y: 2396000 }
        ]
      }
    ]
  });
  chart.render();

  return <div id="chartContainer" style="height: 300px; width: 100%;"></div>;
};

export default Chart;
