// Custom hook for filtering Country demographic data received from Axios requests

function usePopFilter (popArray) {
  
  // console.log(popArray); // to test
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


  return {
    totalPop, originCountries, women, men, infants, children, teens, adults, over60s
  }

}; // usePopFilter()
export { usePopFilter };