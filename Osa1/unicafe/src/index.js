import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {average(good, neutral, bad)}</p>
        <p>Positive {positives(good, neutral, bad)}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)