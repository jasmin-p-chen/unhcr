import { useState, useEffect } from 'react';
import { useAxios } from './useAxios';
import GlobalChart from './chartComponents/GlobalChart';
import { useGlobalPopTypeFilter } from './useGlobalPopTypeFilter';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { testChartData } from "./testChartData";
import PieChart from "./chartComponents/PieChart";

Chart.register(CategoryScale);

function GlobalStats () {
  // console.log(`hello world!`)

  const {loading, results, error} = useAxios("https://api.unhcr.org/population/v1/population/?limit=10000&yearFrom=2023&yearTo=2023&coo_all=true&coa_all=true");

  const globalData = results;
  const globalTotals = useGlobalPopTypeFilter(results);
  // chart
  const [chartData, setChartData] = useState({});

    if (loading === false && chartData.datasets === undefined) {
 
      setChartData(
        {
          labels: globalTotals.map((data) => data.name), 
          datasets: [
            {
              label: "Population",
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
    <div className="main">
      { loading
        ? <p>Loading...</p>
        : null
      }

      { error
        ? <p>Unable to load data. Please try again later.</p>
        : null 
      }

      {
        chartData.datasets !== undefined
        ?
        <PieChart chartData={chartData} />
        : null
      }
      <div>
        <ul>
        { globalTotals.map( popType => <li>Total {popType.name}: {new Intl.NumberFormat().format(popType.total)}</li> )}
        </ul>
        
      </div>
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