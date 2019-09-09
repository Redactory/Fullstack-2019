import React from 'react';

export default function Total(props) {
    let aggregateExcercises = 0;

    for (let i=0; i<props.parts.length; i++) {
        aggregateExcercises = aggregateExcercises + props.parts[i].exercises;
    }

    return (
        <>
            <p>
                Number of exercises {aggregateExcercises}
            </p>
        </>
    );
}