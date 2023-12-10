import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAxios } from './useAxios';
import GlobalChart from './chartComponents/GlobalChart';
import { useGlobalPopFilter } from './useGlobalPopFilter';

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
  console.log(`hello world!`)

  const globalDataRequest = useAxios("https://api.unhcr.org/population/v1/population/?limit=10000&yearFrom=2023&yearTo=2023&coo_all=true&coa_all=true");

  let globalData = globalDataRequest.results;
  // console.log(globalData); // >5000 entries

  // Chart test
  const [chartData, setChartData] = useState({
    labels: testChartData.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: testChartData.map((data) => data.userGain),
        backgroundColor: [
          "pink",
          "yellow",
          "lightblue",
          "green",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
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

  const dataLabels = globalData.map((c) => {return c.coo_name});
  console.log(dataLabels);

  return (
    <div>
      <div className="pie">
        <PieChart chartData={chartData} />
      </div>

    <div>
      <p>Total refugees: {new Intl.NumberFormat().format(totalRefugees)}</p>
      <GlobalChart chartData={dataMapNums} chartLabels={dataLabels} />
    </div>
    </div>
  )

}; // GlobalStats()
export default GlobalStats;