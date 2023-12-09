import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function StatsUnrwa () {

  const params = useParams();

  const [ details, setDetails ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );


  console.log(params.id);
  useEffect( () => { loadDetails(params.id)}, [] );

  const loadDetails = function () {
    axios.get(`https://api.unhcr.org/population/v1/unrwa/?yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}`)
    .then(res => {
      setDetails(res.data.items);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setError(err);
      console.log(`An error has occured`, err);
      setLoading(false);
      return <p>Unable to load data. Please try again later.</p>
    }); 
    }; // loadDetails()

    console.log(details);

    const refugees = [];
    const asylumSeekers = [];
    const stateless = [];

    for (const item of details) {
      // console.log(item); //to test
      if (item.pop_type === "REF") {
        refugees.push(item.total);
      }
      else if (item.pop_type === "ASY") {
        asylumSeekers.push(item.total);
      } else
      stateless.push(item.total);
    };

    const totalUnRefugees = refugees.reduce((num1, num2) => num1 + num2, 0 );
    const totalUnAsylumSeekers = asylumSeekers.reduce((num1, num2) => num1 + num2, 0 );
    const totalUnStateless = stateless.reduce((num1, num2) => num1 + num2, 0 );

    return (
      <div>
        <h2>UNWRA Figures</h2>
        <p>Refugees: {totalUnRefugees}</p>
        <p>Asylum Seekers: {totalUnAsylumSeekers}</p>
        <p>Stateless: {totalUnStateless}</p> 
      </div>
    );


}; // StatsUnrwa()
export default StatsUnrwa;
