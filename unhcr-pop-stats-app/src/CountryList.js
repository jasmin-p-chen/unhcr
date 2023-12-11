
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CountryFilter from './CountryFilter';
import { useAxios } from './useAxios';

function CountryList () {
  // console.log(`Hello Countries of the World!`);
  // const [ query, setQuery ] = useState( '' ); //state for searchQuery
  const [filterCountries, setFilterCountries] = useState( null ); // the results array
 
  const navigateTo = useNavigate();
  const params = useParams();

  const { loading, results, error } = useAxios( "https://api.unhcr.org/population/v1/countries/" );

  function handleFilter (query) {
    console.log(`hi`, query);
    if (query.length > 0) {
      query = query.toLowerCase();
      const filtered = results.filter( c => c.name.toLowerCase().includes(query) );
      setFilterCountries(filtered);
    } else {
      setFilterCountries( null );
    }
  }

  if (loading === false) {
    
  

  }
  let displayList = results;
  if (filterCountries !== null) {
    displayList = filterCountries
  }

  return (


    <div>
      <div>
        <CountryFilter onFilterActive={handleFilter}/>
      </div>
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
        {displayList.map(country => <li
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