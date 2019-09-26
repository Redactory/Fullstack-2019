import React from 'react';
import Person from './Person';

function filterNames(personListing, searchString) {
    const filteredPersons= [];
    searchString = searchString.toLowerCase();
    for(let i=0; i<personListing.length; i++) {
        let personName = personListing[i].props.person.name;
        if (personName === undefined) {
            continue;
        }

        if (personName.toLowerCase().includes(searchString)) {
            filteredPersons.push(personListing[i]);
        }
    }

    return filteredPersons;
}

export default function ContainerPerson(props) {
    let personListing = [];
    for(let i=0; i<props.persons.length; i++) {
        personListing.push(<Person key={props.persons[i].name} person={props.persons[i]} deletePerson={props.deletePerson}/>);
    }

    personListing = filterNames(personListing, props.searchString);

    return(
        <div>
            {personListing}
        </div>
    );
}