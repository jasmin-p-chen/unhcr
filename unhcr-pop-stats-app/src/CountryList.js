import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CountryFilter from './CountryFilter';

// could list by region as well

function CountryList () {
  // console.log(`Hello Countries of the World!`);
  const [data, setData] = useState( [] ); // data array
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );
  const navigateTo = useNavigate();
  const params = useParams();

  useEffect( () => { loadCountries()}, [] );
  const loadCountries = function () {
    axios.get("https://api.unhcr.org/population/v1/countries/")
    .then(res => {
      setData(res.data.items);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setError(err);
      console.log(`An error has occured`, err);
      setLoading(false);
      return <p>Unable to load data. Please try again later.</p>

    }); 
    }; // loadCountries()

    const countryList = data.map((c) => {return [c.name, c.code]});
    // console.log(countryList);

    // function countryFilter (query) {
    //   countryList.filter( c => c.includes(query))
    // };
  
    return (
      <div>
        <CountryFilter />
        <ul>
          {countryList.map((c) => { 
            return <li 
            id={c[1]}
            key={c[1]}
            onClick={
              () => {navigateTo(`/${params.yearNum}/countries/${c[1]}`)}
            }>{c[0]}</li> })}
        </ul>
      </div>
    ) 
}; // CountryList()
export default CountryList;