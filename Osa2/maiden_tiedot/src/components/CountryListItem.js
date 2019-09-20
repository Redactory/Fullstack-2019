import React from 'react';

export default function Country(props) {
    function handleClick() {
        props.setSearchString(props.name);
    }

    const inlineStyle = {
        display: 'inline-block',
        marginRight: '5px'
    };

    return(
        <div>
            <p style={inlineStyle}>{props.name}</p>
            <button style={inlineStyle} onClick={handleClick}>show</button>
        </div>
    );
}