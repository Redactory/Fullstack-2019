import React from 'react';

export default function Total(props) {
    let aggregateExcercises = 0;
    const courseParts = props.course.parts;

    for (let i=0; i<courseParts.length; i++) {
        aggregateExcercises = aggregateExcercises + courseParts[i].exercises;
    }

    return (
        <>
            <p>
                Number of exercises {aggregateExcercises}
            </p>
        </>
    );
}