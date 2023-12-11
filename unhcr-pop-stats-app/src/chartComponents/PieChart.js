import React from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>UNHCR Population Data for 2023</h2>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              legend: {
                display: true,
                position: "right",
                align: 'start',
                boxHeight: 40,
                boxWidth: 40,
              text: "UNHCR Population Data 2023",
              font: {
                size: 30,
                }
              }
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;