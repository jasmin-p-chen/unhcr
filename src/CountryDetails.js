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

  const params = useParams();
  const [chartDataG, setChartDataG] = useState({ });

  const { loading, results, error } = useAxios(`https://api.unhcr.org/population/v1/demographics/?limit=10000&yearFrom=${params.yearNum}&yearTo=${params.yearNum}&coo_all=true&coa=${params.id}&ptype_show=true`);

  const filteredResults = dataFilter.countryDemographics(results);
  //Gender chart
  const genderResults = dataFilter.genderData(filteredResults);
  // console.log(genderResults);

    // chart
  if (loading === false && chartDataG.datasets === undefined) {

    setChartDataG(
      {
        labels: genderResults.map((data) => data.name), 
        datasets: [
          {
            label: "Population",
            type: 'bar',
            data: genderResults.map((data) => data.total),
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
  }; // end chart

    return (

    <div id="country-page">
      { error
      ? <p>Unable to load data. Please try again later.</p>
      :
      console.log(`no error`)
      }
      { loading
      ? 
      <p>Loading...</p>
      :
      <div>
        <div>
          <h1>{params.name}</h1>
        </div>
        <div id="country-stats">
          <div>
          <CountryStats details={results} />
          </div>

          {/* <div>
            <p>Hello</p>
          </div> */}

          { AgeChart.datasets !== undefined
          ? <div>
            <AgeChart />
            </div>
          : null
          }

          {/* <div>
            <p>Hello</p>
          </div> */}

          {/* { loading
        ? <p>Loading data from UNHCR...</p>
        : chartDataG !== undefined
          ? 
          <div id="gender-chart">
            <GenderChart chartDataG={chartDataG} />
            </div>
          : <p>no chart today</p>
          } */}

        </div>
        <SearchForm />
      </div>
      } 
    </div>
    );
}; // CountryDetails()
export default CountryDetails;