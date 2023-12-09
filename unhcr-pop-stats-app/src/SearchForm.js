import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

// Not sure if it's possible to get the search form to link to the mapped countries ?
// Otherwise could add a region?

function SearchForm () {

  const [ query, setQuery ] = useState( '' ); //state for searchQuery
  const navigateTo = useNavigate();
  const params = useParams();
  console.log(params);

  function handleSubmit ( ev ){
    ev.preventDefault();
    console.log(`Search input given is`, query );
    // navigateTo(`search/${ query }`);
  }; // handleSubmit

  function handleChange(ev){
    console.log(ev.target.value);
    setQuery(ev.target.value);
  };

  return (
  <form className="searchform" onSubmit={ handleSubmit }>
    <label>Search for Country or Territory
      <input type="text" onChange={ handleChange } />
      <button>Search</button>
    </label>
  </form>
  );
}; // SearchForm
export default SearchForm;