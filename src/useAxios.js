// Custom hook for loading API data from UNHCR

import axios from 'axios';
import { useState, useEffect } from 'react';

function useAxios (url) {
 
  const [ results, setResults ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect(() => {
    const loadResults = async () => {
      try {
        const response = await axios.get(url);
        setResults(response.data.items);
        setLoading(false); 
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error('An error has occurred', error);
      }
    }; 

    if (url) {
      loadResults();
    }
  }, [url]);

  return { loading, results, error };
}; // useAxios()

export { useAxios };