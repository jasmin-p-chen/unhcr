import { Bar } from "react-chartjs-2";
import '../App.css';

// Yet to populate and deploy this component.

function AgeChart ( { chartData } ) {
  console.log( chartData ); // to test
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Age Distribution</h2>
      <Bar
        data={ chartData }
        options={{
          indexAxis: 'y',   
        }}
      />
    </div>
  );
}; // AgeChart()
export default AgeChart;