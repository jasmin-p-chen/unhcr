
function genderData (chartData) {
  
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
  return genderData;

}; // genderData()
export default genderData;