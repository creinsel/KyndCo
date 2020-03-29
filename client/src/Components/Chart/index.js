import React, { useContext } from "react";
import "./style.css";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";
import CanvasJSReact from "../../lib/canvasjs.react";
import { UserContext } from "../../context/UserContext";

var CanvasJs = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const { userActs } = useContext(UserContext);

  var actsToSort = [...userActs];

  // sorts data
  const sortedData = actsToSort.sort((a, b) => {
    return new Date(b.datePerformed) - new Date(a.datePerformed) ? -1 : 1;
  });

  console.log("sortedData", sortedData);
  //

  // counts dups
  var counts = {};
  sortedData.forEach(obj => {
    var key = moment(obj.datePerformed).format("MM-Do-YY");
    counts[key] = (counts[key] || 0) + 1;
  });

  console.log("dups", counts);
  //

  //create dataPoints array
  var lb = Object.keys(counts);
  console.log("# of db points", lb.length);
  var yAxis = Object.values(counts);
  var dps = [];

  for (let index = 0; index < lb.length; index++) {
    dps.push({
      label: lb[index],
      y: yAxis[index]
    });
  }

  console.log("dataPoints", dps);

  const options = {
    animationEnabled: true,
    title: {
      text: "Charting Your Kyndline"
    },
    axisY: {
      includeZero: true
    },
    data: [
      {
        type: "column",
        indexLabelFontSize: 16,
        yValueFormatString: "#",
        dataPoints: dps
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
