import React from 'react';

function isData(votes) {
    for(let i=0; i<votes.length;i++) {
        if (votes[i] > 0) {
            return true;
        }
    }

    return false;
}

function votes(props) {
    if (isData(props.votes)) {
        return (<p>Has {props.votes[props.mostVoted]} votes</p>);
    }
}

export default function MostVoted(props) {
    return(
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{isData(props.votes) > 0 ? props.anecdotes[props.mostVoted] : "No votes"}</p>
            {votes(props)}
        </div>
    );
}