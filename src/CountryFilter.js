import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

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
  
  const handleChange = (ev) => {
    setQuery( ev.target.value );
    onFilterActive( ev.target.value );
  }; // handleChange

  return (
  <form className="searchform" >
    <label>Start typing Country or Territory to filter
      <input 
      type="text"
      id="textFilter"
      onChange={ handleChange } />
      <button onClick={ handleClear } >Clear</button>
    </label>
  </form>
  );
}; // CountryFilter
export default CountryFilter;