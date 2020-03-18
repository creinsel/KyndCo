import React, { useState, useEffect } from "react";
import "./style.css";
import Moment from "react-moment";
import "moment-timezone";

const Chart = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  const onLoad = () => {
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
          type: "splineArea",
          color: "rgba(54,158,173,.7)",
          markerSize: 5,
          xValueFormatString: "#",
          yValueFormatString: "#",
          dataPoints: [
            { x: new Date(2000, 0), y: 3289000 },
            { x: new Date(2001, 0), y: 3830000 },
            { x: new Date(2002, 0), y: 2009000 },
            { x: new Date(2003, 0), y: 2840000 },
            { x: new Date(2004, 0), y: 2396000 },
            { x: new Date(2005, 0), y: 1613000 },
            { x: new Date(2006, 0), y: 2821000 },
            { x: new Date(2007, 0), y: 2000000 },
            { x: new Date(2008, 0), y: 1397000 },
            { x: new Date(2009, 0), y: 2506000 },
            { x: new Date(2010, 0), y: 2798000 },
            { x: new Date(2011, 0), y: 3386000 },
            { x: new Date(2012, 0), y: 6704000 },
            { x: new Date(2013, 0), y: 6026000 },
            { x: new Date(2014, 0), y: 2394000 },
            { x: new Date(2015, 0), y: 1872000 },
            { x: new Date(2016, 0), y: 2140000 }
          ]
        }
      ]
    });
    chart.render();
  };

  return <div id="chartContainer" style="height: 300px; width: 100%;"></div>;
};

export default Chart;
