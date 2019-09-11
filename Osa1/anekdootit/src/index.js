import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Next from './components/Next';
import Vote from './components/Vote';

function handleNextClick(tableLength, setSelected) {
    const index = Math.floor(Math.random() * Math.floor(tableLength));

    setSelected(index);
}

function handleVoteClick(votes, selected, setVote) {
  const copyVotes = [...votes];
  copyVotes[selected] += 1;
  setVote(copyVotes);
}

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const numberOfAnecdotes = props.anecdotes.length;
  let voteArray = Array.apply(null, new Array(numberOfAnecdotes)).map(Number.prototype.valueOf,0);

  const [votes, setVote] = useState(voteArray);

  return (
    <div>
      <div>
        <Vote 
          setVote={setVote}
          votes={votes}
          selected={selected}
          handleClick={handleVoteClick}
        />
        <Next 
            setSelected={setSelected} 
            tableLength={numberOfAnecdotes}
            handleClick={handleNextClick}/>
        </div>
      {props.anecdotes[selected]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)