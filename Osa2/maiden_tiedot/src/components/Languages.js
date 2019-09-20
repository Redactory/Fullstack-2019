import React from 'react';

export default function Languages(props) {
    const languages = props.languages.map(element => {
       return <li key={element.name}>{element.name}</li>;
    });

    return(<ul>{languages}</ul>);
}