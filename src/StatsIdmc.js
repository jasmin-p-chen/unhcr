 // This component has not been incorported yet

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function StatsIdmc () {

  const params = useParams();
  const [ details, setDetails ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  useEffect( () => { loadDetails()}, [] );

  const loadDetails = function () {
    axios.get(`https://api.unhcr.org/population/v1/idmc/?yearFrom=2022&yearTo=2022&coo_all=true&coa=${params.id}cf_type=true`)
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

    // console.log(details); to test

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

    // console.log(`unclassified: `, unclassified.length); // to test

    const totalIdmcRefugees = refugees.reduce((num1, num2) => num1 + num2, 0 );
    const totalIdmcAsylumSeekers = asylumSeekers.reduce((num1, num2) => num1 + num2, 0 );
    const totalIdmcStateless = stateless.reduce((num1, num2) => num1 + num2, 0 );
    const totalIdmcInternallyDisplaced = internallyDisplaced.reduce((num1, num2) => num1 + num2, 0 );
    const totalIdmcOthersOfConcern = others.reduce((num1, num2) => num1 + num2, 0 );

    return (
      <div>
     {totalIdmcRefugees
      ? <p>Refugees: {totalIdmcRefugees}</p>
      : null}
      {totalIdmcAsylumSeekers
      ? <p>Asylum Seekers: {totalIdmcAsylumSeekers}</p>
      : null}
      {totalIdmcStateless
      ? <p>Stateless: {totalIdmcStateless}</p>
      : null}
      {totalIdmcInternallyDisplaced
      ? <p>Internally Displaced: {totalIdmcInternallyDisplaced}</p>
      : null}
      {totalIdmcOthersOfConcern
      ? <p>Others of Concern: {totalIdmcOthersOfConcern}</p>
      : null}
      </div>
    );


}; // StatsUnrwa()
export default StatsIdmc;