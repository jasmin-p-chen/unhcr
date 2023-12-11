import Chart from "chart.js/auto";
import { useState } from 'react';
import { CategoryScale } from "chart.js";
import { useAxios } from './useAxios';
import dataFilter from './dataFilter';
import PieChart from "./chartComponents/PieChart";

Chart.register(CategoryScale);

function GlobalStats () {

  const [ chartData, setChartData ] = useState({ });

  const { loading, results, error } = useAxios("https://api.unhcr.org/population/v1/population/?limit=10000&yearFrom=2023&yearTo=2023&coo_all=true&coa_all=true");

  const globalTotals = dataFilter.globalFilter(results);

    // chart
  if (loading === false && chartData.datasets === undefined) {

    setChartData(
      {
        labels: globalTotals.map((data) => data.name), 
        datasets: [
          {
            label: "Population",
            type: 'doughnut',
            data: globalTotals.map((data) => data.total),
            backgroundColor: [
              "#1c3e35",
              "#315c4f",
              "#467a69",
              "#5b9883",
              "#6fb69d",
              "#86baa1",
              "#99f2d1",
            ],
            borderColor: "white",
            borderWidth: 1
          }
        ]
      }
    )
  }; // end chart



  return (
    <div>
      { error
        ? <p>Unable to load data. Please try again later.</p>
        : console.log(`no error`)
      }

      { loading
        ? <p>Loading data from UNHCR...</p>
        : 
        chartData.datasets !== undefined
        ?
        <div id="global-container">
          <div>
            <PieChart chartData={chartData} />
          </div>

          <div>
            <ul id="global-stats">
            { globalTotals.map( popType => <li>{popType.name}: {new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(popType.total)}</li> )}
            </ul> 
          </div>

        </div>
        : console.log(``)
      }
    </div>
  )
}; // GlobalStats()
export default GlobalStats;

  // const dataMap = globalData.map((country) => {
  //   return country.refugees
  // });
  // // console.log(dataMap); // to test
  // const dataMapNums = dataMap.map(num => {return parseInt(num)});
  
  // // console.log(dataMapNums); // to test
  // const totalRefugees = dataMapNums.reduce((num1, num2) => num1 + num2, 0 );
  // // console.log(totalRefugees);

  // // const dataLabels = globalData.map((c) => {return c.coo_name});
  // // console.log(dataLabels);