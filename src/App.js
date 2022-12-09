import logo from './logo.svg';
import './App.css';
import countriesData from './countries.json';
import { Routes, Route, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // const [countries, setCountries] = useState('');
  const [countryDataAPI, setCountryDataAPI] = useState([]);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((axiosRes) => {
        console.log(axiosRes.data, '<-axiosRes');
        setCountryDataAPI(axiosRes.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <CountriesList countriesData={countryDataAPI} />
      <Routes>
        <Route
          path="/details/:code"
          element={<CountryDetails countriesData={countryDataAPI} />}
        />
      </Routes>
    </div>
  );
}

export default App;
