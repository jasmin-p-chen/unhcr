import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>UNHCR Population Data for 2023</h2>
      <Pie className="canvas"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "UNHCR Population Data 2023"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;