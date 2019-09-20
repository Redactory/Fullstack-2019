import React from 'react';
import Languages from './Languages';
import CountryFlag from './CountryFlag';

export default function SingleCountryView(props) {
    return (
        <div>
            <h1>{props.countryName}</h1>
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
            <h2>Languages</h2>
            <Languages languages={props.languages}/>
            <CountryFlag url={props.flag}/>
        </div>
    );
}