import React from 'react';
import { Bar } from "react-chartjs-2";
import '../App.css';

// Yet to populate and deploy this component.

function GenderChart ({ chartDataG }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Gender Distribution</h2>
      <Bar
        data={chartDataG}
        options={{
          scales: {
            x: {
                grid: {
                  offset: true
                }
            }
        }

        }}
      />
    </div>
  );
}; // GenderChart()
export default GenderChart;
