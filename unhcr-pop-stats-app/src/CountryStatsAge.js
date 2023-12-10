import { useDataFilter } from './useDataFilter';

function CountryStatsAge ({details}) {

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
  }

  const refugeeDemo = useDataFilter(refugees);
  const asylumSeekerDemo = useDataFilter(asylumSeekers);
  const statelessDemo = useDataFilter(stateless);
  const internallyDisplacedDemo = useDataFilter(internallyDisplaced);
  const otherDemo = useDataFilter(others);
  const unclassifiedDemo = useDataFilter(unclassified);

  // console.log(`refugees: `, refugeeDemo);
  // console.log(`asylumnSeeekrs: `, asylumSeekerDemo);
  // console.log(`stateless: `, statelessDemo);
  // console.log(`internal displacement: `,internallyDisplacedDemo);
  // console.log(`others: `, otherDemo);
  // console.log(`unclassified: `, unclassifiedDemo);

  return (
    <div>
      <p>Refugees: {refugeeDemo.totalPop}</p>
      <p>Asylum Seekers and others in need of international protection: {asylumSeekerDemo.totalPop}</p>
      <p>Stateless people: {statelessDemo.totalPop}</p>
      <p>Internally displaced persons: {internallyDisplacedDemo.totalPop}</p>
      <p>Others of concern to UNHCR: {otherDemo.totalPop}</p>
    </div>
  )

  // const totalUnRefugees = refugees.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnAsylumSeekers = asylumSeekers.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnStateless = stateless.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnInternallyDisplaced = internallyDisplaced.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnOthersOfConcern = others.reduce((num1, num2) => num1 + num2, 0 );
  // // const TotalUnResettled = resettled.reduce((num1, num2) => num1 + num2, 0 );
  // // const TotalUnReturned = returned.reduce((num1, num2) => num1 + num2, 0 );

  // return (
  // //   <div>
  // //     {totalUnRefugees
  // //     ? <p>Refugees: {totalUnRefugees}</p>
  // //     : console.log(`no refugees`)}
  // //     {totalUnAsylumSeekers
  // //     ? <p>Asylum Seekers: {totalUnAsylumSeekers}</p>
  // //     : console.log(`no asylum seekers`)}
  // //     {totalUnStateless
  // //     ? <p>Stateless: {totalUnStateless}</p>
  // //     : console.log(`no stateless`)}
  // //     {totalUnInternallyDisplaced
  // //     ? <p>Internally Displaced: {totalUnInternallyDisplaced}</p>
  // //     : console.log(`no internally displaced`)}
  // //     {totalUnOthersOfConcern
  // //     ? <p>Others of Concern: {totalUnOthersOfConcern}</p>
  // //     : console.log(`no others of concern`)}
  // //   </div>
  // );
}; // PopulationType()
export default CountryStatsAge;