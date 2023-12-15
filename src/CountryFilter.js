import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function CountryFilter ( {onFilterActive, onSubmit} ) {

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
    onSubmit(textFilter.value);
    textFilter.value = '';
    // onFilterActive(-1);
  }; // handleSubmit
  
  const handleChange = (ev) => {
    setQuery( ev.target.value );
    onFilterActive( ev.target.value );
  }; // handleChange

  return (
  <form id="form" className="searchform" onSubmit={ handleSubmit } >
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