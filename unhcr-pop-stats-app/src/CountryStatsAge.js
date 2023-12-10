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

  let men = 0;
  let women = 0; 
  let infants = 0;
  let children = 0;
  let teens = 0;
  let adults = 0;
  let over60s = 0;
  
  let countriesOfOrigin = [];
  let totalRefugees = 0;

  console.log(refugees);

  // for (const cohort of refugees) {
  //   countriesOfOrigin.push({ coo_name: cohort.coo_name, total: cohort.total });
  //   totalRefugees += parseInt(cohort.total);
  //   women += parseInt(cohort.f_total);
  //   men += parseInt(cohort.m_total);
  //   infants += (parseInt(cohort.m_0_4) + parseInt(cohort.f_0_4));
  //   children += (parseInt(cohort.m_5_11) + parseInt(cohort.f_5_11));
  //   teens += (parseInt(cohort.m_12_17) + parseInt(cohort.f_12_17));
  //   adults += (parseInt(cohort.m_18_59) + parseInt(cohort.f_18_59));
  //   over60s += (parseInt(cohort.m_60) + parseInt(cohort.f_60));
  // }
  // console.log(`women with refugee status: `, women + ` men with refugee status: `, men);
  // console.log(`infants: `, infants + ` children: `, children);
  // console.log(countriesOfOrigin);
  // console.log(totalRefugees);

  // for (const cohort of asylumSeekers) {
  //   countriesOfOrigin.push({ coo_name: cohort.coo_name, total: cohort.total });
  //   totalRefugees += parseInt(cohort.total);
  //   women += parseInt(cohort.f_total);
  //   men += parseInt(cohort.m_total);
  //   infants += (parseInt(cohort.m_0_4) + parseInt(cohort.f_0_4));
  //   children += (parseInt(cohort.m_5_11) + parseInt(cohort.f_5_11));
  //   teens += (parseInt(cohort.m_12_17) + parseInt(cohort.f_12_17));
  //   adults += (parseInt(cohort.m_18_59) + parseInt(cohort.f_18_59));
  //   over60s += (parseInt(cohort.m_60) + parseInt(cohort.f_60));
  // }
  // console.log(`women seeking asylum: `, women + ` men seeking asylum: `, men);

  const refugeeStatistics = useDataFilter(refugees);
  console.log(`refugees: `, refugeeStatistics);
  const asylumSeekerStatistics = useDataFilter(asylumSeekers);
  console.log(`asylumnSeeekrs: `, asylumSeekers);
  const statelessStatistics = useDataFilter(stateless);
  console.log(`stateless: `, stateless);
  const internallyDisplacedStatistics = useDataFilter(internallyDisplaced);

  // const refugees = [];
  // const asylumSeekers = [];
  // const returned = [];
  // const stateless = [];
  // const internallyDisplaced = [];
  // const others = [];
  // const resettled = [];
  // const hostCommunity = [];
  // const unclassified = [];

  // const totalUnRefugees = refugees.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnAsylumSeekers = asylumSeekers.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnStateless = stateless.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnInternallyDisplaced = internallyDisplaced.reduce((num1, num2) => num1 + num2, 0 );
  // const totalUnOthersOfConcern = others.reduce((num1, num2) => num1 + num2, 0 );

  // console.log(`unclassified: `, unclassified.length); // to test
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