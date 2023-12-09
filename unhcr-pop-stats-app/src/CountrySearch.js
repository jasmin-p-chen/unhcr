import { useNavigate } from 'react-router-dom';

function CountrySearch () {
  const navigateTo = useNavigate();
  return (
    <button onClick={ () => navigateTo(`./countries`) }>Search Countries</button>
  )
}; // CountrySearch()
export default CountrySearch;