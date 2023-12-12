import { useParams } from 'react-router-dom';
import CountryStats from './CountryStats';
import { useAxios } from './useAxios'; 
import AgeDistributionChart from './chartComponents/AgeDistributionChart';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";

Chart.register(CategoryScale);

function CountryDetails () {

  const params = useParams();
  const [chartData, setChartData] = useState({ });

  const { loading, results, error } = useAxios(`https://api.unhcr.org/population/v1/demographics/?limit=10000yearFrom=${params.yearNum}&yearTo=${params.yearNum}&coo_all=true&coa=${params.id}&ptype_show=true`);

    return (

    <div className="main">
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
        <div>
          <CountryStats details={results} />
          { AgeDistributionChart.datasets !== undefined
          ? <div>
            <AgeDistributionChart />
            </div>
          : console.log(`error`)
          }
          <div>
            <genderChart />
            </div>
        </div>
      </div>
      } 
    </div>
    );
}; // CountryDetails()
export default CountryDetails;