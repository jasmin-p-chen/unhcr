// Custom hook for filtering Global data received from Axios requests
// can make this a LOT DRYer

function useGlobalPopTypeFilter (data) {
  // console.log(data); // to test
  const refugees = data.map((country) => { return parseInt(country.refugees) });
  const asylum_seekers = data.map((country) => { return parseInt(country.asylum_seekers) });
  const returned_idps = data.map((country) => { return parseInt(country.returned_idps) }); // different stats
  const returned_refugees = data.map((country) => { return parseInt(country.returned_refugees ) }); // different stats
  const stateless = data.map((country) => { return parseInt(country.stateless) });
  const idps = data.map((country) => { return parseInt(country.idps) });
  const ooc = data.map((country) => { return parseInt(country.ooc) });
  const hst = data.map((country) => { return parseInt(country.hst) }); // different stats
  const oip = data.map((country) => { return parseInt(country.oip) }); // returned NaN - bug to fix

  function reduceStats (population) {
    const result = population.reduce((num1, num2) => num1 + num2, 0 );
    return result;
  }; // reduceStats()

  const globalRefugees = reduceStats(refugees);
  const globalAsylumSeekers = reduceStats(asylum_seekers);
  const globalStateless = reduceStats(stateless);
  const globalInDisplaced = reduceStats(idps);
  const globalOthersOfConcern = reduceStats(ooc);

  // const globalRefugees = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(refugees));
  // const globalAsylumSeekers = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(asylum_seekers));
  // const globalStateless = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(stateless));
  // const globalInDisplaced = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(idps));
  // // const globalOthersInNeed = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(oip));
  // const globalOthersOfConcern = new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(reduceStats(ooc));

  const popTypes = [
    {
      id: 1,
      key: "refugees",
      name: "Refugees",
      total: globalRefugees,
    }, 

    {
      id: 2,
      key: "asylum_seekers",
      name: "Asylum Seekers",
      total: globalAsylumSeekers,
    }, 
    {
      id: 3,
      key: "returned_keyps",
      name: "Returned Internally Displaced People",
      total: globalInDisplaced,
    }, 

    {
      id: 4,
      key: "returned_refugees",
      name: "Returned refugees",
      total: globalRefugees,
    }, 

    {
      id: 5,
      key: "stateless",
      name: "Stateless people",
      total: globalStateless,
    }, 

    {
      id: 6,
      key: "keyps",
      name: "Internally Displaced People",
      total: globalRefugees,
    }, 

    {
      id: 7,
      key: "ooc",
      name: "Others of Concern",
      total: globalOthersOfConcern,
    }, 

    {
      id: 8,
      key: "hst",
      name: "Host communities",
      total: globalRefugees,
    },
  ];
  
  return popTypes;

}; // useGlobalPopTypeFilter()
export { useGlobalPopTypeFilter };