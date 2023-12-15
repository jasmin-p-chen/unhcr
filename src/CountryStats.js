import dataFilter from './dataFilter';

// in need of some serious refactoring

function CountryStats ({details}) {
  // console.log(`details: `, details); // to test
  const refugees = [];
  const asylumSeekers = [];
  const returned = [];
  const stateless = [];
  const internallyDisplaced = [];
  const others = [];
  const resettled = [];
  const hostCommunity = [];
  const unclassified = [];

  for (const group of details) {
    if (group.pop_type === "REF") {
      refugees.push(group);
    }
    if (group.pop_type === "ROC") {
      refugees.push(group);
    }
    else if (group.pop_type === "ASY") {
      asylumSeekers.push(group);
    } 
    else if (group.pop_type === "OIP") {
      asylumSeekers.push(group);
    } 
    else if (group.pop_type === "IDP") {
      internallyDisplaced.push(group);
    } 
    else if (group.pop_type === "IOC") {
      internallyDisplaced.push(group);
    } 
    else if (group.pop_type === "RET") {
      returned.push(group);
    } 
    else if (group.pop_type === "RDP") {
      returned.push(group);
    } 
    else if (group.pop_type === "STA") {
      stateless.push(group);
    }  
    else if (group.pop_type === "HST") {
      hostCommunity.push(group);
    } 
    else if (group.pop_type === "NAT") {
      resettled.push(group);
    } 
    else if (group.pop_type === "RST") {
      resettled.push(group);
    } 
    else if (group.pop_type === "OOC") {
    others.push(group);
    }
    else {
      unclassified.push(group);
    }
  };

  const refugeeDemo = dataFilter.countryDemographics(refugees);
  const asylumSeekerDemo = dataFilter.countryDemographics(asylumSeekers);
  const statelessDemo = dataFilter.countryDemographics(stateless);
  const internallyDisplacedDemo = dataFilter.countryDemographics(internallyDisplaced);
  const otherDemo = dataFilter.countryDemographics(others);
  // const unclassifiedDemo = dataFilter.countryDemographics(unclassified); // need to look at the data
  const demographicsData = [refugeeDemo, asylumSeekerDemo, statelessDemo, internallyDisplacedDemo, otherDemo];
  const ageData = dataFilter.genderData(demographicsData);

  const totalForciblyDisplaced = 
  refugeeDemo.totalPop + 
  asylumSeekerDemo.totalPop +
  internallyDisplacedDemo.totalPop + 
  otherDemo.totalPop;

  console.log(demographicsData);

  return ( 
  <div id="country-summary">
    { 
    details.length <= 0
    ? 
    <p>No data is available</p>
    :
    totalForciblyDisplaced
    ?
    <p>In {details[0].year}, there were {new Intl.NumberFormat().format(totalForciblyDisplaced)} forcibly displaced people recorded in {details[0].coa_name} and {new Intl.NumberFormat().format(asylumSeekerDemo.totalPop)} asylum seekers.</p>
    : 
    null
    }
  </div>
  );
}; // CountryStats()
export default CountryStats;

  // const totalUnRefugees = refugees.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnAsylumSeekers = asylumSeekers.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnStateless = stateless.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnInternallyDisplaced = internallyDisplaced.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnOthersOfConcern = others.reduce((num1, num2) => num1 + num2, 0 );
  // // const TotalUnResettled = resettled.reduce((num1, num2) => num1 + num2, 0 );
  // // const TotalUnReturned = returned.reduce((num1, num2) => num1 + num2, 0 );