import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAxios } from './useAxios';
import CountryFilter from './CountryFilter';

function CountryList () {
  // console.log(`Hello Countries of the World!`);
 
  const [filterCountries, setFilterCountries] = useState( null ); // the results array
 
  const navigateTo = useNavigate();
  const params = useParams();

  const { loading, results, error } = useAxios( "https://api.unhcr.org/population/v1/countries/" );

  function handleFilter (query) {
  
    if (query.length > 0) {
      query = query.toLowerCase();
      const filtered = results.filter( c => c.name.toLowerCase().startsWith(query) );
      setFilterCountries(filtered);
    } else {
      setFilterCountries( null );
    }
  }

  let displayList = results;
  if (filterCountries !== null) {
    displayList = filterCountries
  }

  //TRYING TO GET THE SEARCH BAR TO TAKE USER STRAIGHT TO THE COUNTRY THEY TYPE

  // function searchCountry (text) {
  //   if (text.length > 3 && results.filter( c => c.name.toLowerCase().startsWith(text.toLowerCase()) {
  //     navigateTo( `/countries/${ country.code }/${ country.name }/2022`);
  //   })) 
  // had put onSubmit={searchCountry} as an attribute of COuntryFilter below
  // }

  return (
    <div>
      <div>
        <CountryFilter onFilterActive={handleFilter} />
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
      <ul className="country-ul">
        {displayList.map(country => <li className="country-list"
          id={ country.name }
          key={ country.code }
          onClick={ () => { navigateTo( `/countries/${ country.code }/${ country.name }/2022`)}}>
          { country.name } </li>)}
      </ul>
      } 
    </div>
  )
}; // CountryList()
export default CountryList;

// /${ params.yearNum }