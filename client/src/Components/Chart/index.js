import React, { useContext } from "react";
import "./style.css";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";
import CanvasJSReact from "../../lib/canvasjs.react";
import { UserContext } from "../../context/UserContext";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("greenShades", [
  //colorSet Array

  "#FFA734",
  "#3EC094"
]);

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

  //take only 5 most recent dates to graph
  const dps5 = dps.splice(-5, 5);

  const options = {
    animationEnabled: true,
    colorSet: "greenShades",
    title: {
      text: "Charting Your Kyndline",
      fontFamily: "Comfortaa",
      fontSize: 24,
      horizontalAlign: "center",
    },
    axisY: {
      includeZero: true,
      title: "# of Acts Completed",
      titleFontFamily: "Comfortaa",
      titleFontSize: 18,
    },
    axisX: {
      title: "By Date",
      titleFontFamily: "Comfortaa",
      titleFontSize: 18,
    },
    data: [
      {
        type: "column",
        indexLabelFontFamily: "Comfortaa",
        indexLabelFontSize: 10,
        yValueFormatString: "#",
        dataPoints: dps5
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
