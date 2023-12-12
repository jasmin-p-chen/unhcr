import { useParams } from 'react-router-dom';
import { useAxios } from './useAxios'; 
import CountryStats from './CountryStats';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import GenderChart from './chartComponents/GenderChart';
import AgeDistributionChart from './chartComponents/AgeDistributionChart';
import SearchForm from './SearchForm';

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

          { AgeDistributionChart.datasets !== undefined
          ? <div>
            <AgeDistributionChart />
            </div>
          : console.log(`error`)
          }

          { GenderChart.datasets !== undefined
          ? <div>
            <GenderChart />
            </div>
          : console.log(`error`)
          }

        </div>
        <SearchForm />
      </div>
      } 
    </div>
    );
}; // CountryDetails()
export default CountryDetails;