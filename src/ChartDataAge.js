import AgeChart from './chartComponents/AgeChart';

function ChartDataAge ( results ) {
  results = results.results; // need to access the array inside the results object
  const ageTotals = results.map( data => data.total); 
  console.log(ageTotals);
  if (ageTotals.reduce((num1, num2) => num1 + num2, 0) === 0) {
    return null;
  } else {
    const chartData = {
      labels: results.map(( data ) => data.name), 
      // mapping genderResults array to generate chart labels
      datasets: [
        {
          label: "Population",
          type: 'bar',
          data: results.map(( data ) => data.total),
          // mapping genderResults array to generate chart data
          backgroundColor: [
            // "#1c3e35",
            "#99f2d1",
          ],
          borderColor: "white",
          borderWidth: 1
        }
      ]
    }
    console.log(chartData);
    return (
    <AgeChart chartData={ chartData } />
    );
  }
}; // ChartDataAge()
export default ChartDataAge;