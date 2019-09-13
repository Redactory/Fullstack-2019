import React from 'react';

export default function Person(props) {
    return <p>{props.person.name} {props.person.number}</p>;
}