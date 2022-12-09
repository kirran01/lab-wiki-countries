import React from 'react';
//import countryData from '../countries.json';
import { Routes, Route, Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      <h1>countries list</h1>
      {props.countriesData.map((country) => {
        return (
          <div className="country-list">
            <ul>
              <li>
                {country.name.common} -{' '}
                <Link to={'/details/' + country.alpha3Code}>
                  {country.alpha3Code}
                </Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
