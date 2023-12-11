
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CountryFilter from './CountryFilter';
import { useAxios } from './useAxios';

function CountryList () {
  // console.log(`Hello Countries of the World!`);
  const [data, setData] = useState( [] ); // data array
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );
  const navigateTo = useNavigate();
  const params = useParams();

  const countriesRequest = useAxios( "https://api.unhcr.org/population/v1/countries/" );
  const countries = countriesRequest.results;

  const countryList = countries.map((c) => { return [c.name, c.code] });
  // console.log(countryList); // to test

  function filterCountryList ( query ) {
    countryList.filter( c => { return c.toLowercase().includes(query)}
    )
  };
  
  return (
  <div>
    <CountryFilter />
    <ul>
      { countryList.map( (c) => { 
        return <li 
        id={ c[1] }
        key={ c[1] }
        onClick={ () => { navigateTo( `/${ params.yearNum }/countries/${ c[1] }` )}
        }>{ c[0] }</li> })}
      </ul>
    </div>
  ) 
}; // CountryList()
export default CountryList;