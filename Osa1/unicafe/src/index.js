import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Statistics from './components/Statistics';
import Button from './components/Button';

function average(good, neutral, bad) {
  const aggregateClicks = good + neutral + bad;
  if (aggregateClicks === 0) {
    return "No data";
  }

  return ((good - bad)/aggregateClicks);
}

function positives(good, neutral, bad) {
  const aggregateClicks = good + neutral + bad;
  if (aggregateClicks === 0) {
    return "No data";
  }

  let positives = good/aggregateClicks * 100;
  return positives + " %";
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button text="good" setHandler={setGood} value={good}/>
        <Button text="neutral" setHandler={setNeutral} value={neutral}/>
        <Button text="bad" setHandler={setBad} value={bad}/>
      </div>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        positives={positives}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)