// Custom hooks for loading API data from UNHCR

import axios from 'axios';
import { useState, useEffect } from 'react';

function useData(url){
  
  const [ results, setResults ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect( async () => {

    try {

      const res = await axios.get(url);
      console.log(`data`, res.data.items);

      setLoading( false );
      setResults( res.data.items );

    } catch( err ) {
      console.error('Error loading results', err);
      setLoading( false );
      setError( err );
    }
  }, []);

  return { loading, results, error };
}; // useCountryDataUn()

export { useData };
