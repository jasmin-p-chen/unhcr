import Chart from "chart.js/auto";
import { useState } from 'react';
import { CategoryScale } from "chart.js";
import dataFilter from './dataFilter';
import GlobalChart from "./chartComponents/PieChart";
// import GlobalChartData from './GlobalChartData';

Chart.register(CategoryScale);

function GlobalStats (props) {

  const [ chartData, setChartData ] = useState({ }); // saving Chart Data in state
 
  const globalTotals = dataFilter.globalFilter(props.results); // passing results to dataFilter to get totals

  if (props.loading === false && chartData.datasets === undefined) { // check that results have loaded and chart data has not!

  const asyData = dataFilter.asyDataFilter(props.results); // passing results to dataFilter to return asylum seeker data
  // console.log(asyData); // testing
  dataFilter.asyGlobalTotal(props.results); // passing results to dataFilter to return global totals

    // setting ChartData right here, but could maybe send to its own component
    setChartData(
      {
        labels: globalTotals.map((data) => data.name), // defining labels
        datasets: [
          {
            type: 'doughnut', // defining chart type
            data: globalTotals.map((data) => data.total), // defining data 
            backgroundColor: [ // setting colours for each doughnut piece
              "#009995",
              "#00ccc7",
              "#006663",
              "#004d4b",
            ],
            borderColor: "white",
            borderWidth: 3,
            hoverOffset: 10,
          }
        ]
      }
    )
  }; // end chart

  return (

    <div>
      { props.error
        ? <p>Unable to load data. Please try again later.</p>
        : 
        props.loading
        ? <p>Loading data from UNHCR...</p>
        : 
        chartData.datasets !== undefined
        ?
        <>
          <GlobalChart chartData={chartData} />
          <div>
            <h2>Worldwide there are: </h2>
            <ul>
              { globalTotals.map( popType => <li className="home-list">{new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(popType.total)} {(popType.name).toLowerCase()} </li> )}
            </ul>
          </div>
        </>
        : null
        }
      </div>
  )
}; // GlobalStats()
export default GlobalStats;
