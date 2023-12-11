import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchForm () {
  //Trying something
  const [year, setYear ] = useState( 2022 );

  const navigateTo = useNavigate();

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(`hi:`, year);
    console.log(typeof year);
    const yearNum = parseInt(year);
    console.log(`Year num is:`, yearNum);
    if (yearNum <= 2023 && yearNum >= 2003 ) {
      navigateTo(`${yearNum}/countries`)
    } else {
      console.log(`invalid year`); // need to give users a message
    }

    // else if (yearNum > 1973) {
    //   return <p>Data unavailable or limited before 1973. Try a later year.</p>
    // } else if (yearNum === null) {
    //   return <p>please enter a valid number</p>
    // } else {navigateTo(`${yearNum}/countries`)} 
    // yearNum < 2023
    // ? <p>this app does not forecast the future. Try a valid year.</p>
    // : yearNum > 1973
    // ? <p>Data unavailable or limited before 1973. Try a later year.</p>
    // : yearNum === null
    // ? <p>please enter a valid number</p>
    // : navigateTo(`${yearNum}/countries`)

  }; // handleSubmit()
  

  return (
    <form onSubmit={ handleSubmit }>
      <label>For country data, choose a year between
        <input type="text" placeholder="2003-2023" id="year" inputMode="numeric" onChange={ ev => setYear(ev.target.value)}></input>
      </label>
      <button>Countries</button>
    </form>
    
  )

  // function handleSubmit ( ev ){
  //   ev.preventDefault();
  //   console.log(`Search input given is`, query );
  //   navigateTo(`search/${ query }`);
  // }; // handleSubmit










 // END OF Trying something



  // const navigateTo = useNavigate();
  // return (
  //   <button onClick={ () => navigateTo(`./countries`) }>Search Countries</button>
  // )
}; // SearchForm()
export default SearchForm;