import { Bar } from "react-chartjs-2";
import '../App.css';

// Yet to populate and deploy this component.

function AgeChart ( {chartData} ) {
  console.log(chartData); // to test
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Forcibly displaced people by age"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}; // AgeChart()
export default AgeChart;