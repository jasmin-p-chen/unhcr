import { Route, Routes, HashRouter as Router, Link } from 'react-router-dom';

import './PopulationStatsApp.css';
import GlobalStats from './GlobalStats';
import SearchForm from './SearchForm';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

function PopulationStatsApp() {
  return (
  <div className="container">
    <Router>
      <div className="nav"> <Link to="./">Home</Link> </div>
      <Routes>   
        <Route path="/" exact element={
          <div className="main">
            <div>
              <Link to="./"><h1>Global Statistics on Forced Displacement</h1></Link>
            </div>
            <GlobalStats />
            <SearchForm />
          </div> }>
        </Route>
        <Route path=":yearNum/countries" element={ <CountryList /> }></Route>
        <Route path=":yearNum/countries/:id" element={ <CountryDetails /> }></Route>
      </Routes>
    </Router>
  </div>
  );
} // PopulationStatsApp()

export default PopulationStatsApp;
