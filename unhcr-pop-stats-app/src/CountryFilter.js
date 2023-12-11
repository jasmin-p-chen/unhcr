import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

// Not sure how to get this search form to filter mapped countries ?
// Otherwise could add a region?
// Maybe something to do with includes()?

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
  
  const handleChange = (ev) => {
    console.log(ev.target.value); // to test
    setQuery(ev.target.value.toLowerCase());
  };

  return (
  <form className="searchform" onSubmit={ handleSubmit }>
    <label>Start typing Country or Territory to filter
      <input 
      type="text"
      value={ query } 
      onChange={ handleChange } />
      <button>Search</button>
    </label>
  </form>
  );
}; // CountryFilter
export default CountryFilter;