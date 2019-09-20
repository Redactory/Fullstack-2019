import React from 'react';

export default function CountryFlag(props) {
    const flagStyle = {
        display: 'block',
        width: '10%',
        border: '1px solid black'
      };

    return(
        <img className="country-flag" src={props.url} alt="" style={flagStyle}/>
    );
}