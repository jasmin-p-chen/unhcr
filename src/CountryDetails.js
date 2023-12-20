import { useParams } from 'react-router-dom';
import { useAxios } from './useAxios'; 
import { CategoryScale } from "chart.js";
import { useState } from "react";
import Chart from "chart.js/auto";
import CountryStats from './CountryStats';
import GenderChart from './chartComponents/GenderChart';
import AgeChart from './chartComponents/AgeChart';
import SearchForm from './SearchForm';
import dataFilter from './dataFilter';

// Yet to get the two Charts working on this page. Advice welcome!

Chart.register(CategoryScale);

function CountryDetails () {

  const params = useParams(); // activating useParams
  const [chartDataG, setChartDataG] = useState({ }); // State to store age data
  const [chartDataA, setChartDataA] = useState({ }); // State to store gender data

  // using custom hook to send Axios request to return demographic data disaggregated by country
  const { loading, results, error } = useAxios(`https://api.unhcr.org/population/v1/demographics/?limit=10000&yearFrom=${params.yearNum}&yearTo=${params.yearNum}&coo_all=true&coa=${params.id}&ptype_show=true`);

  // passing request result to dataFilter to return filtered results
  const filteredResults = dataFilter.countryDemographics(results); 

  // passing filtred results to dataFilter to return data for age chart
  const ageResults = dataFilter.ageData(filteredResults);
  // console.log(`age:`, ageResults); // testing

  // passing filtred results to dataFilter to return data for gender chart
  const genderResults = dataFilter.genderData(filteredResults);
  // console.log(genderResults); // testing

  // setting age demographics chart data into state
  if (loading === false && chartDataA.datasets === undefined) { // conditions for data to be set

    setChartDataA(
      {
        labels: ageResults.map((data) => data.name), 
        // mapping ageResults array to generate chart labels
        datasets: [
          {
            label: "Age",
            type: 'bar',
            data: ageResults.map((data) => data.total),
            // mapping ageResults array to generate chart data
            backgroundColor: [
              "#99f2d1",
            ],
            borderColor: "white",
            borderWidth: 1
          }
        ]
      }
    )
  }; // age chart data set

  if (loading === false && chartDataG.datasets === undefined) { // conditions for data to be set

    setChartDataG(
      {
        labels: genderResults.map((data) => data.name), 
        // mapping genderResults array to generate chart labels
        datasets: [
          {
            label: "Population",
            type: 'bar',
            data: genderResults.map((data) => data.total),
            // mapping genderResults array to generate chart data
            backgroundColor: [
              "#1c3e35",
              "#99f2d1",
            ],
            borderColor: "white",
            borderWidth: 1
          }
        ]
      }
    )
  }; // gender chart data set

    return (

    <div id="country-page">
      { error
      ? <p>Unable to load data. Please try again later.</p>
      : 
      loading
      ? 
      <p>Loading...</p>
      :
      <div>
          <SearchForm />
          <h1>{params.name}</h1>
        <div id="country-details">
          <CountryStats details={results} />
          {/* <div id="country-charts">
          { loading
          ?   
          <p>Loading data from UNHCR...</p>
          : chartDataA !== undefined
          ? 
          <AgeChart chartDataA={chartDataA}/>
          : null
          } */}

          {/* { loading
        ? <p>Loading data from UNHCR...</p>
        : chartDataG !== undefined
          ? 
            <GenderChart chartDataG={chartDataG} />
          : <p>chart unavailable</p>
          } */}

        {/* </div> */}

      </div> 

    </div>
    }
    </div>
    );
}; // CountryDetails()
export default CountryDetails;