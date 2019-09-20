import React from 'react';

export default function SearchBar(props) {
    return(
        <div>
            Find countries:<input value={props.value} onChange={props.handleSearchChange}></input>
        </div>
    );
}