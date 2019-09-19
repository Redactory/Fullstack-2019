import React from 'react';

export default function SearchBar(props) {
    return (
        <div>
        search: <input value={props.value} onChange={props.handleSearchChange}/>
      </div>
    );
}