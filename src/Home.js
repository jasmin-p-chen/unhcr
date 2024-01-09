import Intro from './Intro';
import Header from './Header';
import ChartDataGlobal from './ChartDataGlobal';
import GlobalStats from './GlobalStats';
import Chart from "chart.js/auto";
import { useState } from 'react';
import { CategoryScale } from "chart.js";
import { useAxios } from './useAxios';
import dataFilter from './dataFilter';
import GlobalChart from "./chartComponents/GlobalChart";

function Home () {
  // Using a custom hook to make an axios request to Population API data for 2023
  // (CHANGE this to current year).
  const { loading, results, error } = useAxios("https://api.unhcr.org/population/v1/population/?limit=10000&yearFrom=2023&yearTo=2023&coo_all=true&coa_all=true");
  
  let total;
  if (loading === false) { // waiting to receive the data so we are not working with nothing
    total = dataFilter.asyGlobalTotal(results); // passing results to the dataFilter and setting state
  }

  return (
    <div id="Home">
      { error
        ? <p>Unable to load data. Please try again later.</p>
        : 
        loading
        ? <p>Loading data from UNHCR...</p>
        : 
        <div id="home-content">
          <Intro loading={loading} error={error} total={total} />
          <GlobalStats loading={loading} error={error} results={results} />
        </div>
        }
    </div>
  );
}; // Home()
export default Home;
