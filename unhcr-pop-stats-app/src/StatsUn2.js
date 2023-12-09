import { useData } from './dataHelper';
import { useParams, useNavigate } from 'react-router-dom';

function StatsUn () {

  const params = useParams();
  // const navigateTo = useNavigate();

  const { loading, results, error } = useData( `https://api.unhcr.org/population/v1/demographics/?yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}&ptype_show=true`);

  if ( error ) {
    return <p>The data could not be loaded. Please try again later.</p>;
  }

  return (
    <div>
      {
        loading
        ?
        <p>Loading results...</p>
        :
        <p>hi</p>
      }
    </div>
  );


}; // StatsUn()
export default StatsUn;
