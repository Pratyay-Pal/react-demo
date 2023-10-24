import "./Chart.css";
import ChartBars from "./ChartBars";

function Chart(props) {

  const dataPointsValue = props.dataPoints.map(dataPoints => dataPoints.value)
  const maxValue = Math.max(...dataPointsValue)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
