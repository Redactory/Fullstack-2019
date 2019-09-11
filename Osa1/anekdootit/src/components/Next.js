import React from 'react';

export default function Next(props) {
    return (
        <button onClick={()=>{props.handleClick(props.tableLength, props.setSelected)}}>Next Anecdote</button>
    );
}