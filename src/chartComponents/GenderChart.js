import React from 'react';
import { Doughnut } from "react-chartjs-2";
import '../App.css';

// Yet to populate and deploy this component.

function GenderChart ({ chartData }) {
  return (
    <div id="gender-chart">
      <h2 style={{ textAlign: "center" }}>Gender Distribution</h2>
      <p>Figures by reported gender</p>
      <Doughnut
        data={ chartData }
        // options={{
        //   scales: {
        //     x: {
        //         grid: {
        //           offset: true
        //         }
        //     }
        // }

        // }}
      />
    </div>
  );
}; // GenderChart()
export default GenderChart;
