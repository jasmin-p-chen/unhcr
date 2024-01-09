import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function CountryFilter ( {onFilterActive} ) {

  const [ query, setQuery ] = useState( '' ); //state for searchQuery as it is being typed
  const [ text, setText ] = useState ( '' ); // state for searchText if submitted by hitting ENTER
  const navigateTo = useNavigate();
  const params = useParams();
  // console.log(params);

  const textFilter = document.querySelector("#textFilter");
  const form = document.querySelector('#form');

  function handleSubmit ( ev ){
    ev.preventDefault();
    setText(textFilter.value );
    textFilter.value = '';
    // onFilterActive(-1);
  }; // handleSubmit
  
  const handleChange = (ev) => {
    setQuery( ev.target.value );
    onFilterActive( ev.target.value );
  }; // handleChange

  // if country search is only one and user hits enter then go directly to that country.
  // 1. listen if the user presses enter
  // 1a. find out if the country filter has only one entry
  // 2. send that info to the country filter
  // 3. go directly to the address for that country.

  

  return (
  <form id="form" className="searchform">
    <label>Start typing Country or Territory to filter
      <input 
      type="text"
      id="textFilter"
      onChange={ handleChange } />
    <button>Clear</button>
    </label>
  </form>
  );
}; // CountryFilter
export default CountryFilter;