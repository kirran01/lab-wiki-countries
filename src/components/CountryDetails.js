import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = (props) => {
  let { code } = useParams();
  const [oneCountry, setOneCountry] = useState(null);

  useEffect(() => {
    const clickedCountry = props.countriesData.filter((countryToGet) => {
      return countryToGet.alpha3Code === code;
    });
    console.log(clickedCountry[0], 'onecountry?');
    setOneCountry(clickedCountry[0]);
  }, [code]);

  return (
    <div className="country-details">
      <h1>country details</h1>
      {oneCountry?<p>name:{oneCountry.name.common}</p>:<p>loading...</p>}
      {/* <p>name:{oneCountry.name.common}</p> */}
    </div>
  );
};

export default CountryDetails;
