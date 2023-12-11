import { useState, useEffect } from 'react';
import { useAxios } from './useAxios';
import GlobalChart from './chartComponents/GlobalChart';
import { useGlobalPopTypeFilter } from './useGlobalPopTypeFilter';

// Hoping to add a chart and global stats using chrt.js

// Chart Test //
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
// import { useState } from "react";
import { testChartData } from "./testChartData";
import PieChart from "./chartComponents/PieChart";

Chart.register(CategoryScale);
//end chart import
function GlobalStats () {
  // console.log(`hello world!`)

  const globalDataRequest = useAxios("https://api.unhcr.org/population/v1/population/?limit=10000&yearFrom=2023&yearTo=2023&coo_all=true&coa_all=true");

  const globalData = globalDataRequest.results;
  const globalResults = useGlobalPopTypeFilter(globalDataRequest.results);
  console.log(`states we want: `, globalResults);
  const testTotals = globalResults.map((data) => data.total);
  console.log(testTotals);

  // Chart test
  const [chartData, setChartData] = useState({
    labels: globalResults.map((data) => data.name), 
    datasets: [
      {
        label: "Population",
        data: globalResults.map((data) => data.total),
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
  });
  // Chart end

  const dataMap = globalData.map((country) => {
    return country.refugees
  });
  // console.log(dataMap); // to test
  const dataMapNums = dataMap.map(num => {return parseInt(num)});
  
  // console.log(dataMapNums); // to test
  const totalRefugees = dataMapNums.reduce((num1, num2) => num1 + num2, 0 );
  // console.log(totalRefugees);

  // const dataLabels = globalData.map((c) => {return c.coo_name});
  // console.log(dataLabels);

  return (
    <div>
      <div className="pie">
        <PieChart chartData={chartData} />
      </div>

    <div>
      <p>Total refugees: {new Intl.NumberFormat().format(totalRefugees)}</p>
      {/* <GlobalChart chartData={globalData.map(data => data.total)} chartLabels={dataLabels} /> */}
    </div>
    </div>
  )

}; // GlobalStats()
export default GlobalStats;