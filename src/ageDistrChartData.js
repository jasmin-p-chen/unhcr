import AgeDistributionChart from "./chartComponents/AgeDistributionChart";

function ageDistrChartData (chartData) {
  
 let totalMen = 0;
 let totalWomen = 0;

 const asyInfants = chartData[1].infants;
 const asyChildren = chartData[1].children;
 const asyTeens = chartData[1].teens;
 const asyAdults = chartData[1].adults;
 const asyOver60 = chartData[1].over60s;

  for (const group of chartData) {
    totalMen += parseInt(group.men);
    totalWomen += parseInt(group.women);
  }

  const genderData = [
    {
      id: 1,
      name: "men",
      total: totalMen,
    },

    {
      id: 2,
      name: "women",
      total: totalWomen,
    },
  ];
  console.log(genderData);
  AgeDistributionChart(genderData);


// const newChart = chartData.map(popType => {
  //   return {
  //     id: chartData.indexOf(popType),
  //     men: popType.men, 
  //     women: popType.women
  //   }
  // })


  // const reducedChart = newChart.map(popType => {
  //   return [

  //   ]
  //     popType.men.reduce((num1, num2) => num1 + num2, 0 )
  //   }
  // }) 

  // // const totalmen = newChart
  // console.log(totalmen);




  // const popTypes = [
  //   {
  //     id: 1,
  //     key: "refugees",
  //     name: "Refugees",
  //     total: globalRefugees,
  //   }, 

  //   {
  //     id: 2,
  //     key: "asylum_seekers",
  //     name: "Asylum Seekers",
  //     total: globalAsylumSeekers,
  //   }, 
  //   {
  //     id: 3,
  //     key: "returned_keyps",
  //     name: "Returned Internally Displaced People",
  //     total: globalInDisplaced,
  //   }, 

  //   {
  //     id: 4,
  //     key: "returned_refugees",
  //     name: "Returned refugees",
  //     total: globalRefugees,
  //   }, 

  //   {
  //     id: 5,
  //     key: "stateless",
  //     name: "Stateless people",
  //     total: globalStateless,
  //   }, 

  //   {
  //     id: 6,
  //     key: "keyps",
  //     name: "Internally Displaced People",
  //     total: globalRefugees,
  //   }, 

  //   {
  //     id: 7,
  //     key: "ooc",
  //     name: "Others of Concern",
  //     total: globalOthersOfConcern,
  //   }, 

  // ];
}; // ageDistributionChart
export default ageDistrChartData;