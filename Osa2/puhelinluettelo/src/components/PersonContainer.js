import React from 'react';
import Person from './Person';

export default function ContainerPerson(props) {
    const personListing = [];
    for(let i=0; i<props.persons.length; i++) {
        personListing.push(<Person key={props.persons[i].name} person={props.persons[i]} />);
    }

    return(
        <div>
            {personListing}
        </div>
    );
}