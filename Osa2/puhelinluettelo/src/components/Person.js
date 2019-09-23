import React from 'react';

export default function Person(props) {
    const divContentStyling = {
        display: 'inline',
        marginLeft: '1em'
    }

    const divStyling = {
        marginBottom: '1em'
    }

    return (
        <div style={divStyling}>
            <p style={divContentStyling}>{props.person.name} {props.person.number}</p>
            <button style={divContentStyling} onClick={()=> props.deletePerson(props.person.id, props.person.name)}>delete</button>
        </div>
    );
}