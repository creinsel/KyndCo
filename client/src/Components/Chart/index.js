/* App.js */
var React = require("react");
var CanvasJSReact = require("./canvasjs.react");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var kyndPts = [];

const Chart = () => {
  const options = {
    theme: "light2",
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
        type: "line",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.00",
        dataPoints: dataPoints
      }
    ]
  };
  return (
    <div>
      <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

module.exports = Chart;
