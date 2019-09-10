import React from 'react'

export default function Statistics (props) {
  const clicks = props.good + props.neutral + props.bad
  if (clicks === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.good + props.neutral + props.bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{props.average(props.good, props.neutral, props.bad)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{props.positives(props.good, props.neutral, props.bad)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
