import React from 'react';

export default function Next(props) {
    return (
        <div>
            <button 
                onClick={()=>{props.handleClick(props.tableLength, props.setSelected)}}>Next Anecdote</button>
        </div>
    );
}