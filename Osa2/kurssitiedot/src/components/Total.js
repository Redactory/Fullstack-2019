import React from 'react';

export default function Total(props) {
    let aggregateExcercises = 0;
    const courseParts = props.course.parts;

    aggregateExcercises = courseParts.reduce((start, current) => {
        if (isNaN(start)) {
            return start.exercises + current.exercises;
        }
        return start + current.exercises;
    });

    return (
        <>
            <p>
                Number of exercises {aggregateExcercises}
            </p>
        </>
    );
}