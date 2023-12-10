// Custom hook for loading API data from UNHCR

import axios from 'axios';
import { useState, useEffect } from 'react';

function useAxios (url) {
 
  // State for variables
  const [ results, setResults ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect( () => { loadResults(url) }, [url] ); 

  // AJAX request to the API
  const loadResults = function (url) {
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

  // console.log( results ); // to test
  return { loading, results, error };
}; // useAxios()

export { useAxios };



  // Not sure why my fetch doesn't work - just going to keep using get:

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