// Custom hook for filtering Country demographic data received from Axios requests

function useDataFilter (popArray) {
  // console.log(popArray); // to test
  
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

}; // useDataFilter()
export { useDataFilter };