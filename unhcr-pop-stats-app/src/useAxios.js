// Custom hook for loading API data from UNHCR
import axios from 'axios';
import { useState, useEffect } from 'react';

function useAxios (url) {
  console.log(`url:`, url); // to test
  
  const [ results, setResults ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect( () => { loadResults()}, [url] );

  const loadResults = function () {
    axios.get(url)
    .then(results => {
      setResults(results.data.items);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
      console.log(`An error has occured`, error);
      return <p>Unable to load data. Please try again later.</p>
    });
  }; // loadResults()
  // console.log(`axios results:`, results); // to test
  return {loading, results, error };
}; // useAxios()

export { useAxios };

  // useEffect( async () => {

  //   try {

  //     const res = await axios.get(url);
  //     console.log(`data`, res.data.items);
  //     setLoading( false );
  //     setResults( res.data.items );

  //   } catch( err ) {
  //     console.error('Error loading results', err);
  //     setLoading( false );
  //     setError( err );
  //   }
  // }, []);