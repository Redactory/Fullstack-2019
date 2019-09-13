import React from 'react';
import Person from './Person';

export default function ContainerPerson(props) {
    const personListing = [];
    for(let i=0; i<props.persons.length; i++) {
        personListing.push(<Person key={props.persons[i].name} name={props.persons[i].name} />);
    }

    return(
        <div>
            {personListing}
        </div>
    );
}