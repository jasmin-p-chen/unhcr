import { useDataFilter } from './useDataFilter';

function CountryStats ({details}) {

  console.log(`details: `, details);
  // details.length > 0
  // ?
  // const arrivalCountry = details[0].coa_name;
  // :
  // <p>No data</p>

  // const year = details[0].year;

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

  const refugeeDemo = useDataFilter(refugees);
  const asylumSeekerDemo = useDataFilter(asylumSeekers);
  const statelessDemo = useDataFilter(stateless);
  const internallyDisplacedDemo = useDataFilter(internallyDisplaced);
  const otherDemo = useDataFilter(others);
  // const unclassifiedDemo = useDataFilter(unclassified); // need to look at the data

  const totalForciblyDisplaced = 
  refugeeDemo.totalPop + 
  asylumSeekerDemo.totalPop +
  internallyDisplacedDemo.totalPop + 
  otherDemo.totalPop;

  // console.log(`refugees: `, refugeeDemo);
  // console.log(`asylumnSeeekrs: `, asylumSeekerDemo);
  // console.log(`stateless: `, statelessDemo);
  // console.log(`internal displacement: `,internallyDisplacedDemo);
  // console.log(`others: `, otherDemo);
  // console.log(`unclassified: `, unclassifiedDemo);

  return ( 
  <div className="main">
    {details.length > 0
    ? <h1>{details[0].coa_name}</h1>
    : <p>No data available</p>}
    {totalForciblyDisplaced
    ? <p>There were {new Intl.NumberFormat().format(totalForciblyDisplaced)} forcibly displaced people located in {details[0].coa_name} in {details[0].year}</p>
    : null}
    {refugeeDemo.totalPop
    ? <p>Refugees: {new Intl.NumberFormat().format(refugeeDemo.totalPop)}</p>
    : null}
    {asylumSeekerDemo.totalPop
    ? <p>Asylum Seekers: {new Intl.NumberFormat().format(asylumSeekerDemo.totalPop)}</p>
    : null}
    {statelessDemo.totalPop
    ? <p>Stateless: {new Intl.NumberFormat().format(statelessDemo.totalPop)}</p>
    : null}
    {internallyDisplacedDemo.totalPop
    ? <p>Internally Displaced: {new Intl.NumberFormat().format(internallyDisplacedDemo.totalPop)}</p>
    : null}
    {otherDemo.totalPop
    ? <p>Others of concern to UNHCR: {new Intl.NumberFormat().format(otherDemo.totalPop)}</p>
    : null}
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