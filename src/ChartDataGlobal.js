import GlobalChart from './chartComponents/GlobalChart';

function ChartDataGlobal ( globalTotals ) {

  globalTotals = globalTotals.globalTotals; // access array inside object

  const chartData = (
    {
      labels: globalTotals.map((data) => data.name), // defining labels
      datasets: [
        {
          type: 'bar', // defining chart type
          data: globalTotals.map((data) => data.total), // defining data 
          backgroundColor: [ // setting colours for each doughnut piece
            "#009995",
            "#00ccc7",
            "#006663",
            "#004d4b",
          ],
          borderColor: "white",
          borderWidth: 3,
          hoverOffset: 10,
        }
      ]
    }
  )
  return (
  <GlobalChart chartData={ chartData } />
  );
  
}; // GlobalChart()
export default ChartDataGlobal;