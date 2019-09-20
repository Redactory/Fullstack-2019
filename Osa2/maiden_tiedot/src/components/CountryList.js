import React from 'react';
import CountryListItem from './CountryListItem';
import SingleCountryView from './SingleCountryView';

export default function CountryList(props) {
    const filteredCountries = filterCountries(props.countries, props.searchString);

    if (props.searchString.length === 0) {
        return "";
    }

    if (filteredCountries.length === 0) {
        return "";
    }

    if (filteredCountries.length === 1) {
        const country = filteredCountries[0];

        return (
            <SingleCountryView 
                countryName={country.props.name}
                capital={country.props.capital}
                population={country.props.population}
                languages={country.props.languages}
                flag={country.props.flag}
            />
        );
    }

    if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
        return(
            <div>
                {filteredCountries}
            </div>
        );
    }

    if (filteredCountries.length > 10) {
        return(
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        );
    }

    function filterCountries(countries, searchString) {
        if(countries.length === 0) {
            return [];
        }
    
        searchString = searchString.toLowerCase();
        const filteredCountries = [];
        countries.filter(element=> {
          const countryName = element.name.toLowerCase();
          if (countryName.includes(searchString)) {
            filteredCountries.push(
                <CountryListItem 
                    key={element.numericCode} 
                    name={countryName}
                    capital={element.capital}
                    population={element.population}
                    languages={element.languages}
                    flag={element.flag}
                    setSearchString = {props.setSearchString}
                />
            );
          }
        });
    
        return filteredCountries;
    }    
}