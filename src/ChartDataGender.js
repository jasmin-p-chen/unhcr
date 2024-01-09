import GenderChart from './chartComponents/GenderChart';

function ChartDataGender ( results ) {
  results = results.results;
  const genderTotals = results.map( data => data.total);
  if (genderTotals.reduce((num1, num2) => num1 + num2, 0) === 0) {
  return null;
 } else {
  const chartData = {
    labels: results.map(( data ) => data.name), 
    // mapping genderResults array to generate chart labels
    datasets: [
      {
        label: "Population",
        type: 'doughnut',
        data: results.map(( data ) => data.total),
        // mapping genderResults array to generate chart data
        backgroundColor: [
          "#1c3e35",
          "#99f2d1",
        ],
        borderColor: "white",
        borderWidth: 1
      }
    ]
  }
  console.log(chartData);
  return (
    <GenderChart chartData={ chartData } id="gender" />
  );
}

}; // ChartDataGender()
export default ChartDataGender;