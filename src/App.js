import { Route, Routes, HashRouter as Router, Link } from 'react-router-dom';

import './App.css';
import Menu from './Menu';
import About from './About';
import Home from './Home';
import Header from './Header';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

function PopulationStatsApp() {
  return (
  <div>
    <Router>
      <Header />
      <Menu />
      <Routes>   
        <Route path="/" exact element={ <Home /> }>
          </Route>
        <Route path="about" element={ <About /> }></Route>
        <Route path="countries" element={ <CountryList /> }></Route>
        <Route path="countries/:id/:name" element={ <CountryDetails /> }></Route>
        <Route path="countries/:id/:name/:yearNum" element={ <CountryDetails /> }></Route>
      </Routes>
    </Router>
  </div>
  );
} // PopulationStatsApp()
export default PopulationStatsApp;
