import { Bar } from "react-chartjs-2";

function GlobalChart ({chartData, chartLabels}) {
  // console.log(chartData); // to test
  // console.log(chartLabels); // to test

//   const labels = chartLabels;
//   const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Attempt',
//     data: chartData,
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };

// const config = {
//   type: 'bar',
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   },
// };

// return (
//   <div className="chart">
//       <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
//       <Bar
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Refugees 2022"
//             },
//             legend: {
//               display: false
//             }
//           }
//         }}
//       />
//     </div>
// );
  
}; // GlobalChart;

export default GlobalChart;