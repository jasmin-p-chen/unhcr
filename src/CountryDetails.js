import { useParams } from 'react-router-dom';
import { useAxios } from './useAxios'; 
import { CategoryScale } from "chart.js";
import { useState } from "react";
import Chart from "chart.js/auto";
import CountryStats from './CountryStats';
import GenderChart from './chartComponents/GenderChart';
import AgeChart from './chartComponents/AgeChart';
import SearchForm from './SearchForm';

// Yet to get the two Charts working on this page. Advice welcome!

Chart.register(CategoryScale);

function CountryDetails () {

  const params = useParams();
  const [chartData, setChartData] = useState({ });

  const { loading, results, error } = useAxios(`https://api.unhcr.org/population/v1/demographics/?limit=10000&yearFrom=${params.yearNum}&yearTo=${params.yearNum}&coo_all=true&coa=${params.id}&ptype_show=true`);

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
          <CountryStats details={results} />

          { AgeChart.datasets !== undefined
          ? <div>
            <AgeChart />
            </div>
          : null
          }

          { GenderChart.datasets !== undefined
          ? <div>
            <GenderChart />
            </div>
          : null
          }

        </div>
        <SearchForm />
      </div>
      } 
    </div>
    );
}; // CountryDetails()
export default CountryDetails;