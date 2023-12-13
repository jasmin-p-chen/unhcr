import { Bar } from "react-chartjs-2";
import '../App.css';

// Yet to populate and deploy this component.

function GenderChart ({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Forcibly displaced people by reported gender"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}; // GenderChart()
export default GenderChart;