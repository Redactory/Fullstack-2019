import React from 'react';

export default function Anecdote(props) {
    return(
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdote}
            <p>Has {props.votes} votes</p>
        </div>
    );
}