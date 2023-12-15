import { Doughnut } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';

function GlobalChart({ chartData }) {
  return (
    <div className="global-chart">
      <Doughnut
        data={chartData}
        fallbackContent={"Doughnut shaped chart representing the number of refugees, asylum seekers, people who are experiencing internal displacement and other people of concern to UNHCR." }
        // options={{
        //   indexAxis: 'y',   
        // }}
        />
    </div>
  );
} // GlobalChart()
export default GlobalChart;