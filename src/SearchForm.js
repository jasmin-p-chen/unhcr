import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function SearchForm ({ handleSearch }) {
  //Trying something
  const [year, setYear ] = useState( 2022 );
  const params = useParams();
  const navigateTo = useNavigate();

  function handleSubmit(ev) {
    ev.preventDefault();
    const yearNum = parseInt(year);
    // console.log(`Year is:`, yearNum);
    if ( yearNum <= 2023 && yearNum >= 2003 ) {
      navigateTo(`/countries/${params.id}/${params.name}/${yearNum}`);
    } else {
      setYear( 101 ); // signal to users
    }
  }; // handleSubmit()

  return (
    <form onSubmit={ handleSubmit }>
      {
      year === 101
      ?
      <p id="warning">Data on this app is only available between 2003 and 2023. Please try a different year or try the UNCHR Data Finder.</p>
      : 
      null
      }
      <label>You can search for data between
        <input type="text" placeholder="2003-2023" id="year" inputMode="numeric" onChange={ ev => setYear(ev.target.value)}></input>
      </label>
      <button>Search</button>
    </form>
  )
}; // SearchForm()
export default SearchForm;