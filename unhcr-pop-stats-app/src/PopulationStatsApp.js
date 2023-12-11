import { Route, Routes, HashRouter as Router, Link } from 'react-router-dom';

import './PopulationStatsApp.css';
import GlobalStats from './GlobalStats';
import SearchForm from './SearchForm';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import Menu from './Menu';

function PopulationStatsApp() {
  return (
  <div>
    <Router>
    <div className="nav"> <Link to="./">Home</Link> </div>
    <Menu />
      <Routes>   
        <Route path="/" exact element={ <div className="main">
          <header>
            <h1>Global Statistics on Forced Displacement</h1>
          </header>
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
