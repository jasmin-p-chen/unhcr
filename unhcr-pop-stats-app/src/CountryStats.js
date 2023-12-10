import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useData } from './dataHelper';
import StatsUnrwa from './StatsUnrwa';
import StatsIdmc from './StatsIdmc'; 
import PopulationType from './PopulationType';
import CountryStatsAge from './CountryStatsAge';
import CountryStatsAsy from './CountryStatsAsy';

function CountryStats () {

  const params = useParams();
  // const navigateTo = useNavigate();

  const [ unDetails, setUnDetails ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect( () => { loadUnDetails(params.id)}, [params.id] );

    // const { loading, results, error } = useData( `https://api.unhcr.org/population/v1/unwra/?yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}&ptype_show=true`, params.id );

  const loadUnDetails = function () {
    axios.get(`https://api.unhcr.org/population/v1/demographics/?limit=none&yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}&ptype_show=true`)
    .then(res => {
      setUnDetails(res.data.items);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
      console.log(`An error has occured`, err);
      return <p>Unable to load data. Please try again later.</p>
    }); 
    }; // loadDetails()

    // console.log(unDetails); // to test

    //Age demographics
    // Gender demographics

    return (
      <div>
        < PopulationType details={unDetails} />
        < StatsUnrwa />
        < StatsIdmc />
        < CountryStatsAge details={unDetails} />
        < CountryStatsAsy />
        
      </div>
    );
}; // CountryStats()
export default CountryStats;