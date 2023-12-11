import { useParams } from 'react-router-dom';
import CountryStats from './CountryStats';
import { useAxios } from './useAxios'; 

function CountryDetails () {

  const params = useParams();

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
      </div>
      </div>
      } 
    </div>
    );
}; // CountryDetails()
export default CountryDetails;