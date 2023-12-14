// A global object of regularly used functions to calculate and filter data for components.

/* Table of functions:

1. asyDataFilter: Data filter for results from the population API related to asylum seekers
2. globalFilter:  Data filter for forcibly displaced group totals using the population API. 
                  See Line # for available categories and definitions.
                  NEED TO FINISH REFACTORING
*/

const dataFilter = {

  // filter data for forcibly displaced groups using the population API. See Line # for available categories and definitions.
  asyDataFilter ( data ) {
    // console.log(`bigData:`, data); // testing
    const asylumSs = []; // Array to keep results related to Asylum Seekers
    
    let popType; // Variable to help identify results with the population type "Asylum Seeker"
    
    data.map(( country ) => { // mapping through the data array to filter objects related to asylum seekers 
      if ( country.asylum_seekers !== "0" ) { // setting a condition to filter asylum seekers results
        popType = country.asylum_seekers; // assigning a positive result to the popType variable 
        asylumSs.push(country); // pushing relevant results to the asylumSs array
      }
    });
    // console.log(`asylum`, asylumSs); // returns 4400+ objects
    return asylumSs;
    },

  globalFilter ( data ) {
    const displaced = []; // Array to keep filtered results
  
  // refugees, refLikes, asylumSs, othersIn, intDispl,
  const refugees = data.map((country) => { return parseInt(country.refugees) });
  const asylum_seekers = data.map((country) => { return parseInt(country.asylum_seekers) });
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
    ];
    
    return popTypes;
  
  }, // globalFilter()

  populationType (popArray) {
    console.log(popArray); // to test
    const refugees = [];
    const asylumSeekers = [];
    // const returned = [];
    const stateless = [];
    const internallyDisplaced = [];
    const others = [];
    // const resettled = [];
    // const hostCommunity = [];
    // const unclassified = []; // to test for missed categories
  
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
      else if (group.pop_type === "OOC") {
      others.push(group);
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

  genderData (filteredResults) {
  
    let totalMen = 0;
    let totalWomen = 0;
    console.log(`filtered:`, filteredResults);
   
     const genderData = [
       {
         id: 1,
         name: "men",
         total: filteredResults.men 
       },
   
       {
         id: 2,
         name: "women",
         total: filteredResults.women,
       },
     ];
    //  console.log(genderData);
     return genderData;

   }, // genderData()
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

/*  Available categories and definitions 
[from UNHCR website](https://www.unhcr.org/refugee-statistics/methodology/definition/)

Summary of Categories for Population Type:

1. Refugees (REF)
2. People in refugee-like situation (ROC)
3. Asylum Seeekers (ASY)
4. Other people in need of international protection (OIP)
5. Internally displaced persons (IDP)
6. People in an IDP-like situation (IOC)
7. Stateless People (STA)
8. Other groups or persons of concern (OOC)
9. Host community (HST)
10. Returned refugees (RET)
11. Returned IDPs (RDP)
12. Naturalised (NAT)
13. Resettled (RST)

Refugees include individuals recognized under the 1951 Convention relating to the Status of Refugees, its 1967 Protocol, the 1969 Organization of African Unity (OAU) Convention Governing the Specific Aspects of Refugee Problems in Africa, the refugee definition contained in the 1984 Cartagena Declaration on Refugees as incorporated into national laws, those recognized in accordance with the UNHCR Statute, individuals granted complementary forms of protection, and those enjoying temporary protection. The refugee population also includes people in refugee-like situations.

People in refugee-like situation refers to a category which is descriptive in nature and includes groups of people who are outside their country or territory of origin and who face protection risks similar to those of refugees, but for whom refugee status has, for practical or other reasons, not been ascertained.

Asylum-seekers are individuals who have sought international protection and whose claims for refugee status have not yet been determined.

Other people in need of international protection refers to people who are outside their country or territory of origin, typically because they have been forcibly displaced across international borders, who have not been reported under other categories (asylum-seekers, refugees, people in refugee-like situations) but who likely need international protection, including protection against forced return, as well as access to basic services on a temporary or longer-term basis.

Internally displaced persons (IDPs) are persons or groups of persons who have been forced or obliged to flee or to leave their homes or places of habitual residence, in particular as a result of, or in order to avoid the effects of armed conflict, situations of generalized violence, violations of human rights or natural or human-made disasters, and who have not crossed an internationally recognized State border. For the purposes of UNHCR’s statistics, this population includes only conflict-generated IDPs to whom the Office extends protection and/or assistance. The IDP population also includes people in an IDP-like situation.

People in an IDP-like situation refers to a category which is descriptive in nature and includes groups of people who are inside their country of nationality or habitual residence and who face protection risks similar to those of IDPs but who, for practical or other reasons, could not be reported as such.

Individuals under UNHCR’s statelessness mandate are defined under the 1954 Convention Relating to the Status of Stateless People as those not considered as nationals by any State under the operation of its law. In other words, they do not possess the nationality of any State. UNHCR statistics refer to people who fall under the organization’s statelessness mandate as those who are stateless according to this international definition. Data from some countries may also include people with undetermined nationality. These are people who lack proof of possession of any nationality and at the same time have or are regarded as having important links to more than one State. UNHCR also works with populations at risk of statelessness, but persons at risk of statelessness are not reported on under the statistical category of individuals under UNHCR’s statelessness mandate.

Other groups or persons of concern refers to individuals who do not necessarily fall directly into any of these groups above but to whom UNHCR has extended its protection and/or assistance services, based on humanitarian or other special grounds.

Host community refers to a community that hosts large populations of refugees or internally displaced persons, whether in camps, integrated into households, or independently. UNHCR reports on host communities in countries with substantive programmes focusing on sharing the burden of hosting large refugee populations, as set out in the Global Compact on Refugees.

Returned refugees are former refugees who have returned to their countries of origin, either spontaneously or in an organized fashion, but are yet to be fully integrated. Such returns would ideally take place only under conditions of safety and dignity. For the purpose of UNHCR's statistics, only refugees who returned during the calendar year are included, although in practice, operations may assist returnees for longer periods.

Returned IDPs refers to those IDPs who were beneficiaries of UNHCR’s protection and assistance activities, and who returned to their areas of origin or habitual residence during the calendar year. In practice, however, operations may assist IDP returnees for longer periods.

Naturalized refugees refers to those refugees that have naturalized in their country of asylum. Naturalization is the legal act or process by which a non-citizen in a country may acquire citizenship or nationality of that country. It is used as a proxy measure of local integration. The International Recommendations on Refugee Statistics make several recommendations on appropriate indicators for measuring and quantifying local integration in a way that is comparable and consistent across different contexts. However, the availability of such data about refugees remains very poor. Even data on naturalization is limited by the uneven availability of data and poor coverage as well as policy and legal changes over time. In particular, it can be difficult to distinguish between the naturalization of refugees and non-refugees. Therefore, the data are only indicative at best and provide an underestimate of the extent to which refugees are naturalized.

Resettled refugees are those who have who have been resettled to another country. Resettlement is used to assist refugees in countries that cannot provide them with appropriate protection and support. Resettlement is primarily facilitated by UNHCR in most countries around the world, although significant private sponsorship schemes do exist as well (e.g. in Canada). 

*/