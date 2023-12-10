import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

// Not sure if it's possible to get the search form to link to the mapped countries ?
// Otherwise could add a region?

function CountryFilter () {

  const [ query, setQuery ] = useState( '' ); //state for searchQuery
  const navigateTo = useNavigate();
  const params = useParams();
  // console.log(params);

  function handleSubmit ( ev ){
    ev.preventDefault();
    console.log(`Search input given is`, query );
    // navigateTo(`search/${ query }`);
  }; // handleSubmit
  
  //attempting to make the Search work
  
  function handleChange(ev){
    console.log(ev.target.value);
    setQuery(ev.target.value);
  };

  return (
  <form className="searchform" onSubmit={ handleSubmit }>
    <label>Start typing Country or Territory to filter
      <input type="text" onChange={ handleChange } />
      <button>Search</button>
    </label>
  </form>
  );
}; // CountryFilter
export default CountryFilter;