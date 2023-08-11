import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";


const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaxium = Math.max(...dataPointvalues);
  
  return (
    <div className="Chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
