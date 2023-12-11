
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CountryFilter from './CountryFilter';
import { useAxios } from './useAxios';

function CountryList () {
  // console.log(`Hello Countries of the World!`);
  // const [ query, setQuery ] = useState( '' ); //state for searchQuery
  const navigateTo = useNavigate();
  const params = useParams();

  const { loading, results, error } = useAxios( "https://api.unhcr.org/population/v1/countries/" );

  if (loading === false) {

    console.log(`results: `, results.map(country => country.name));

  }

  return (

    <div>
      {
      error
      ? 
      <p>Unable to load data. Please try again later.</p>
      : 
      console.log(`no error`)
      } 

      {
      loading
      ?
      <p>loading data...</p>
      :
      <ul>
        {results.map(country => <li
          id={ country.name }
          key={ country.code }
          onClick={ () => { navigateTo( `/${ params.yearNum }/countries/${ country.code }`)}}>
           {country.name} </li>)}
      </ul>
      } 

    </div>
  )
}; // CountryList()
export default CountryList;