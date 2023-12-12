const dataFilter = {

  globalFilter (data) {
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
  
  }, // globalFilter()

  populationType (popArray) {
    console.log(popArray); // to test
    const refugees = [];
    const asylumSeekers = [];
    const returned = [];
    const stateless = [];
    const internallyDisplaced = [];
    const others = [];
    const resettled = [];
    const hostCommunity = [];
    const unclassified = [];
  
    for (const group of popArray) {
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
    const countryPopTypes = [
      refugees,
      asylumSeekers,
      // returned,
      stateless,
      internallyDisplaced,
      others,
      // resettled,
      // hostCommunity,
      // unclassified,
    ];
    console.log(countryPopTypes);
    return countryPopTypes;
  }, // populationType()

  countryDemographics (popArray) {
    console.log(popArray); // to test
    
    let men = 0;
    let women = 0; 
    let infants = 0;
    let children = 0;
    let teens = 0;
    let adults = 0;
    let over60s = 0;
    
    let originCountries = [];
    let totalPop = 0;
  
    for (const cohort of popArray) {
    originCountries.push({ coo_name: cohort.coo_name, total: cohort.total });
    totalPop += parseInt(cohort.total);
    women += parseInt(cohort.f_total);
    men += parseInt(cohort.m_total);
    infants += (parseInt(cohort.m_0_4) + parseInt(cohort.f_0_4));
    children += (parseInt(cohort.m_5_11) + parseInt(cohort.f_5_11));
    teens += (parseInt(cohort.m_12_17) + parseInt(cohort.f_12_17));
    adults += (parseInt(cohort.m_18_59) + parseInt(cohort.f_18_59));
    over60s += (parseInt(cohort.m_60) + parseInt(cohort.f_60));
    }
  
    return {
      totalPop, originCountries, women, men, infants, children, teens, adults, over60s
    }
  
  }, // countryDemographics()

  ageDistribution (countryDemographicsdata) {

    console.log(`hi`);


  },

}; // dataFilter{}

export default dataFilter;

// function useDataFilter (popArray) {
//   // console.log(popArray); // to test
  
//   let men = 0;
//   let women = 0; 
//   let infants = 0;
//   let children = 0;
//   let teens = 0;
//   let adults = 0;
//   let over60s = 0;
  
//   let originCountries = [];
//   let totalPop = 0;

//   for (const cohort of popArray) {
//   originCountries.push({ coo_name: cohort.coo_name, total: cohort.total });
//   totalPop += parseInt(cohort.total);
//   women += parseInt(cohort.f_total);
//   men += parseInt(cohort.m_total);
//   infants += (parseInt(cohort.m_0_4) + parseInt(cohort.f_0_4));
//   children += (parseInt(cohort.m_5_11) + parseInt(cohort.f_5_11));
//   teens += (parseInt(cohort.m_12_17) + parseInt(cohort.f_12_17));
//   adults += (parseInt(cohort.m_18_59) + parseInt(cohort.f_18_59));
//   over60s += (parseInt(cohort.m_60) + parseInt(cohort.f_60));
//   }

//   return {
//     totalPop, originCountries, women, men, infants, children, teens, adults, over60s
//   }

// }; // useDataFilter()
// export { useDataFilter };