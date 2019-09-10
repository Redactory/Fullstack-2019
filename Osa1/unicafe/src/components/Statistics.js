import React from 'react';
import Statistic from './Statistic';

export default function Statistics(props) {
    const clicks = props.good + props.neutral + props.bad;
    if (clicks === 0) {
        return <p>No feedback given</p>;
    }
    
    return (
        <div>
            <h1>statistics</h1>
            <Statistic text="good" value={props.good}/>
            <Statistic text="neutral" value={props.neutral}/>
            <Statistic text="bad" value={props.bad}/>
            <Statistic text="all" value={props.good + props.neutral + props.bad}/>
            <Statistic text="average" value={props.average(props.good, props.neutral, props.bad)}/>
            <Statistic text="positive" value={props.positives(props.good, props.neutral, props.bad)}/>
      </div>
    );
}