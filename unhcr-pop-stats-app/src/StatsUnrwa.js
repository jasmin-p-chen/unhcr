import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function StatsUnrwa () {

  const params = useParams();

  const [ details, setDetails ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect( () => { loadDetails()}, [] );

  // This component has not been incorported yet
  
  const loadDetails = function () {
    axios.get(`https://api.unhcr.org/population/v1/unrwa/?yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}`)
    .then(res => {
      setDetails(res.data.items);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
      console.log(`An error has occured`, err);
      return <p>Unable to load data. Please try again later.</p>
    }); 
    }; // loadDetails()

    // console.log(`unrwa`, details); to test

    const refugees = [];
    const asylumSeekers = [];
    const returned = [];
    const stateless = [];
    const internallyDisplaced = [];
    const others = [];
    const resettled = [];
    const hostCommunity = [];
    const unclassified = []; // testing for missed categories

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
        unclassified.push(group.total);
      }
    }

    const totalUnrwaRefugees = refugees.reduce((num1, num2) => num1 + num2, 0 );
    const totalUnrwaAsylumSeekers = asylumSeekers.reduce((num1, num2) => num1 + num2, 0 );
    const totalUnrwaStateless = stateless.reduce((num1, num2) => num1 + num2, 0 );
    const totalUnrwaInternallyDisplaced = internallyDisplaced.reduce((num1, num2) => num1 + num2, 0 );
    const totalUnrwaOthersOfConcern = others.reduce((num1, num2) => num1 + num2, 0 );
    
    // console.log(`unclassified: `, unclassified.length); // to test

    return (
      <div>
        {totalUnrwaRefugees
        ? <p>Palestinian refugees: {totalUnrwaRefugees}</p>
        : null}
        {totalUnrwaAsylumSeekers
        ? <p>Palestinian asylum seekers: {totalUnrwaAsylumSeekers}</p>
        : null}
        {totalUnrwaStateless
        ? <p>Palestinian people registered as stateless: {totalUnrwaStateless}</p>
        : null}
        {totalUnrwaInternallyDisplaced
        ? <p>Internally Displaced Palestinians: {totalUnrwaInternallyDisplaced}</p>
        : null}
        {totalUnrwaOthersOfConcern
        ? <p>Other Palestinians of Concern: {totalUnrwaOthersOfConcern}</p>
        : null}
      </div>
    );

}; // StatsUnrwa()
export default StatsUnrwa;
