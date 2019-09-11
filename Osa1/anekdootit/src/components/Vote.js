import React from 'react';

export default function Vote(props) {
    return (
        <>
            <button onClick={()=>props.handleClick(props.votes, props.selected, props.setVote)}>
                Vote
            </button>
        </>
        );
}