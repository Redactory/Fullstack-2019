import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

function App() {
  const [searchString, setSearchString] = useState('');
  const [countries, setCountries] = useState([]);
  
  useEffect(()=> {
    Axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response=> {
        setCountries(response.data);
      })
  }, []);

  function handleSearchChange(event) {
    setSearchString(event.target.value);  
  }

  return (
    <div>
      <SearchBar value={searchString} handleSearchChange={handleSearchChange}/>
      <CountryList countries={countries} searchString={searchString}/>  
    </div>
  );
}

export default App;
