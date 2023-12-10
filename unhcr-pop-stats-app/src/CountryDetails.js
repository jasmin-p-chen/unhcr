import { useParams } from 'react-router-dom';
import { useAxios } from './useAxios'; 
// import PopulationType from './PopulationType';
import CountryStatsAge from './CountryStatsAge';

function CountryDetails () {

  const params = useParams();

  const countryRequest = useAxios(`https://api.unhcr.org/population/v1/demographics/?yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}&ptype_show=true`);

  console.log(`country request: `, countryRequest.results); // to test

    return (
      <div>
        {/* < PopulationType details={countryRequest.results} /> */}
        < CountryStatsAge details={countryRequest.results} />
        
      </div>
    );
}; // CountryDetails()
export default CountryDetails;