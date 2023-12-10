import { Route, Routes, HashRouter as Router, Link } from 'react-router-dom';

import './PopulationStatsApp.css';
import GlobalStats from './GlobalStats';
import CountrySearch from './CountrySearch';
import CountryList from './CountryList';
import CountryStats from './CountryStats';

function PopulationStatsApp() {
  return (
    <div className="App">
      <div>
        <Router>
          <nav> <Link to="./">Home</Link> </nav>
          <Routes>   
            <Route path="/" exact element={
              <div>
                <header>
                  <Link to="./"><h1>Global Statistics on Forced Displacement</h1></Link>
                </header>
                <GlobalStats />
                <CountrySearch />
              </div> }>
            </Route>
              <Route path="/countries" element={ <CountryList /> }></Route>
              <Route path="/countries/:id" element={ <CountryStats /> }></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
} // PopulationStatsApp()

export default PopulationStatsApp;
