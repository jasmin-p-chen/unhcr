import axios from 'axios';
import { useState, useEffect } from 'react';
import GlobalChart from './GraphicComponents/GlobalChart';
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";

// Hoping to add a chart and global stats using chrt.js

function GlobalStats () {
  console.log(`hello world!`)
  const [data, setData] = useState( [] ); // data array
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect( () => { loadResults()}, [] );
  
  function loadResults() {
    axios.get("https://api.unhcr.org/population/v1/population/?yearFrom=2023&yearTo=2023&coo_all=true&coa_all=true")
    .then( res => {
      setData(res.data.items);
      setLoading(false);
    })
    .catch( err => {
      console.log(err);
      setError(err);
      console.log(`An error has occured`, err);
      setLoading(false);
      return <p>Unable to load data. Please try again later.</p>
    }); 
  }; // loadResults
  // console.log(data); // to test

  const dataMap = data.map((country) => {
    return country.refugees  
  });
  // console.log(dataMap); // to test
  const dataMapNums = dataMap.map(num => {return parseInt(num)});

  
  // console.log(dataMapNums); // to test
  const totalRefugees = dataMapNums.reduce((num1, num2) => num1 + num2, 0 );
  console.log(totalRefugees);

  const dataLabels = data.map((c) => {return c.coo_name});
  console.log(dataLabels);

  return (
    <div>
      <p>Total refugees: {new Intl.NumberFormat().format(totalRefugees)}</p>
      <GlobalChart chartData={dataMapNums} chartLabels={dataLabels} />
    </div>
  )

}; // GlobalStats()
export default GlobalStats;