
function PopulationType ({details}) {

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
    // console.log(group); //to test
    if (group.pop_type === "REF") {
      refugees.push(group.total);
    }
    if (group.pop_type === "ROC") {
      refugees.push(group.total);
    }
    else if (group.pop_type === "ASY") {
      asylumSeekers.push(group.total);
    } 
    else if (group.pop_type === "OIP") {
      asylumSeekers.push(group.total);
    } 
    else if (group.pop_type === "IDP") {
      internallyDisplaced.push(group.total);
    } 
    else if (group.pop_type === "IOC") {
      internallyDisplaced.push(group.total);
    } 
    else if (group.pop_type === "RET") {
      returned.push(group.total);
    } 
    else if (group.pop_type === "RDP") {
      returned.push(group.total);
    } 
    else if (group.pop_type === "STA") {
      stateless.push(group.total);
    }  
    else if (group.pop_type === "HST") {
      hostCommunity.push(group.total);
    } 
    else if (group.pop_type === "NAT") {
      resettled.push(group.total);
    } 
    else if (group.pop_type === "RST") {
      resettled.push(group.total);
    } 
    else if (group.pop_type === "OOC") {
    others.push(group.total);
    }
    else {
      unclassified.push(group.total); // testing for missed categories
    }
  }

  const totalUnRefugees = refugees.reduce((num1, num2) => num1 + num2, 0 );
  const totalUnAsylumSeekers = asylumSeekers.reduce((num1, num2) => num1 + num2, 0 );
  const totalUnStateless = stateless.reduce((num1, num2) => num1 + num2, 0 );
  const totalUnInternallyDisplaced = internallyDisplaced.reduce((num1, num2) => num1 + num2, 0 );
  const totalUnOthersOfConcern = others.reduce((num1, num2) => num1 + num2, 0 );

  console.log(`unclassified: `, unclassified.length); // to test
  // const TotalUnResettled = resettled.reduce((num1, num2) => num1 + num2, 0 );
  // const TotalUnReturned = returned.reduce((num1, num2) => num1 + num2, 0 );

  return (
    <div>
      {totalUnRefugees
      ? <p>Refugees: {totalUnRefugees}</p>
      : null}
      {totalUnAsylumSeekers
      ? <p>Asylum Seekers: {totalUnAsylumSeekers}</p>
      : null}
      {totalUnStateless
      ? <p>Stateless: {totalUnStateless}</p>
      : null}
      {totalUnInternallyDisplaced
      ? <p>Internally Displaced: {totalUnInternallyDisplaced}</p>
      : null}
      {totalUnOthersOfConcern
      ? <p>Others of Concern: {totalUnOthersOfConcern}</p>
      : null }
    </div>
  );
}; // PopulationType()
export default PopulationType;