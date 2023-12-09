import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useData } from './dataHelper';
import StatsUnrwa from './StatsUnrwa';
import StatsIdmc from './StatsIdmc'; 
import PopulationType from './PopulationType';

function CountryStats () {

  const params = useParams();
  // const navigateTo = useNavigate();

  const [ unDetails, setUnDetails ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect( () => { loadUnDetails(params.id)}, [params.id] );

    // const { loading, results, error } = useData( `https://api.unhcr.org/population/v1/unwra/?yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}&ptype_show=true`, params.id );

  const loadUnDetails = function () {
    axios.get(`https://api.unhcr.org/population/v1/demographics/?yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}&ptype_show=true`)
    .then(res => {
      setUnDetails(res.data.items);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setError(err);
      console.log(`An error has occured`, err);
      setLoading(false);
      return <p>Unable to load data. Please try again later.</p>
    }); 
    }; // loadDetails()

    console.log(unDetails);

    //Poptype Stats - should this go somewhere else?
    const refugees = [];
    const asylumSeekers = [];
    const returnees = [];
    const stateless = [];
    const internallyDisplaced = [];

    for (const item of unDetails) {
      // console.log(item); //to test
      if (item.pop_type === "REF") {
        refugees.push(item.total);
      }
      else if (item.pop_type === "ASY") {
        asylumSeekers.push(item.total);
      } else if (item.pop_type === "IDP") {
        internallyDisplaced.push(item.total);
      } else if (item.pop_type === "RET") {
        returnees.push(item.total);
      } else {
      stateless.push(item.total);
    };

    const totalUnRefugees = refugees.reduce((num1, num2) => num1 + num2, 0 );
    const totalUnAsylumSeekers = asylumSeekers.reduce((num1, num2) => num1 + num2, 0 );
    const totalUnStateless = stateless.reduce((num1, num2) => num1 + num2, 0 );

    //Age demographics

    return (
      <div>
        {/* <PopulationType unDetails={unDetails} /> */}
        <p>Refugees: {totalUnRefugees}</p>
        <p>Asylum Seekers: {totalUnAsylumSeekers}</p>
        <p>Stateless: {totalUnStateless}</p> 
        <StatsUnrwa />
        <StatsIdmc />
      </div>
    );
  }

}; // CountryStats()
export default CountryStats;
