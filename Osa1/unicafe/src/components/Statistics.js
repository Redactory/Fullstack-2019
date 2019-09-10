import React from 'react';

export default function Statistics(props) {
    const clicks = props.good + props.neutral + props.bad;
    if (clicks === 0) {
        return <p>No feedback given</p>;
    }

    return (
        <div>
            <h1>statistics</h1>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.good + props.neutral + props.bad}</p>
            <p>average {props.average(props.good, props.neutral, props.bad)}</p>
            <p>Positive {props.positives(props.good, props.neutral, props.bad)}</p>
      </div>
    );
}