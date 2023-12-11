// Custom hook for filtering Global data received from Axios requests

function useGlobalPopTypeFilter (data) {
  
  // console.log(data); // to test

  // const asylum_seekers = [];
  // const returned_idps = [];
  // const returned_refugees = [];
  // const stateless = [];
  // const idps = [];
  // const ooc = [];
  // const hst = [];
  // const oip = [];

  const refugees = data.map((country) => { return parseInt(country.refugees) });
  const asylum_seekers = data.map((country) => { return parseInt(country.asylum_seekers) });
  const returned_idps = data.map((country) => { return parseInt(country.returned_idps) });
  const returned_refugees = data.map((country) => { return parseInt(country.returned_refugees ) });
  const stateless = data.map((country) => { return parseInt(country.stateless) });
  const idps = data.map((country) => { return parseInt(country.idps) });
  const ooc = data.map((country) => { return parseInt(country.ooc) });
  const hst = data.map((country) => { return parseInt(country.hst) });
  const oip = data.map((country) => { return parseInt(country.oip) });

  function reduceStats (population) {
    const result = population.reduce((num1, num2) => num1 + num2, 0 );
    return result;
  }; // reduceStats()

  const globalRefugees = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(refugees));
  const globalAsylumSeekers = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(asylum_seekers));
  const globalStateless = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(stateless));
  const globalInDisplaced = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(idps));
  // const globalOthersInNeed = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(oip));
  const globalOthersOfConcern = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(ooc));

  const popTypes = [
    {
      key: "refugees",
      name: "Refugees",
      total: globalRefugees,
    }, 

    {
      key: "asylum_seekers",
      name: "Asylum Seekers",
      total: globalAsylumSeekers,
    }, 
    {
      key: "returned_idps",
      name: "Returned Internally Displaced People",
      total: globalInDisplaced,
    }, 

    {key: "returned_refugees",
      name: "Returned refugees",
      total: globalRefugees,
    }, 

    {
      key: "stateless",
      name: "Stateless people",
      total: globalStateless,
    }, 

    {
      key: "idps",
      name: "Internally Displaced People",
      total: globalRefugees,
    }, 

    {
      key: "ooc",
      name: "Others of Concern",
      total: globalOthersOfConcern,
    }, 

    {
      key: "hst",
      name: "Host communities",
      total: globalRefugees,
    },

    // {
    //   key: "oip",
    //   name: "Others in Need of Protection",
    //   total: globalOthersInNeed,
    // }
  ];
  
  return popTypes;
  //Calculations for totals
  // for (let types of popTypes) {
  //   console.log(types);
  // }



  // const Chart_Global_Types = [];

  // const globalRefugees = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(refugees));
  // const globalAsylumSeekers = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(asylum_seekers));
  // const globalStateless = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(stateless));
  // const globalInDisplaced = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(idps));
  // const globalOthersInNeed = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(oip));
  // const globalOthersOfConcern = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(ooc));



}; // useGlobalPopTypeFilter()
export { useGlobalPopTypeFilter };

  // const refugees = [];
  // const asylumSeekers = [];
  // const returnedIdps = [];
  // const returnedRefugees = [];
  // const stateless = [];
  // const internallyDisplaced = [];
  // const othersOfConcern = [];
  // const hostCommunity = [];
  // const othersNeedingProtection = [];