import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

// Not sure how to get this search form to filter mapped countries ?
// Otherwise could add a region?
// Maybe something to do with includes()?

function CountryFilter ( {onFilterActive} ) {

  const [ query, setQuery ] = useState( '' ); //state for searchQuery
  const navigateTo = useNavigate();
  const params = useParams();
  // console.log(params);

  const textFilter = document.querySelector("#textFilter")
  function handleClear ( ev ){
    ev.preventDefault();
    textFilter.value = '';
  }; // handleSubmit
  
  //attempting to make the Search work
  
  const handleChange = (ev) => {
    console.log(ev.target.value); // to test
    setQuery(ev.target.value);
    onFilterActive(ev.target.value);
  };

  return (
  <form className="searchform" >
    <label>Start typing Country or Territory to filter
      <input 
      type="text"
      id="textFilter"
      onChange={ handleChange } />
      <button onClick={handleClear}>Clear</button>
    </label>
  </form>
  );
}; // CountryFilter
export default CountryFilter;