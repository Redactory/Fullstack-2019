import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Next from './components/Next';
import Vote from './components/Vote';
import MostVoted from './components/MostVoted'

function mostVotedAnecdote(anecdoteVotes) {
  let mostPopular = 0;
  let votes = 0;
  for(let i=0;i<anecdoteVotes.length;i++) {
    if(anecdoteVotes[i] > votes) {
      mostPopular = i;
      votes=anecdoteVotes[i];
    }
  }

  return mostPopular;
}

function handleNextClick(tableLength, setSelected) {
    const index = Math.floor(Math.random() * Math.floor(tableLength));

    setSelected(index);
}

function handleVoteClick(votes, selected, setVote, setMostVoted, mostVotedAnecdote) {
  const copyVotes = [...votes];
  copyVotes[selected] += 1;
  setVote(copyVotes);

  const mostVoted = mostVotedAnecdote(copyVotes);
  setMostVoted(mostVoted);
}

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const numberOfAnecdotes = props.anecdotes.length;
  let voteArray = Array.apply(null, new Array(numberOfAnecdotes)).map(Number.prototype.valueOf,0);
  const [votes, setVote] = useState(voteArray);

  const [mostVoted, setMostVoted] = useState(0);

  return (
    <div>
      <div>
        <Vote 
          setVote={setVote}
          votes={votes}
          selected={selected}
          handleClick={handleVoteClick}
          setMostVoted={setMostVoted}
          mostVotedAnecdote={mostVotedAnecdote}
        />
        <Next 
            setSelected={setSelected} 
            tableLength={numberOfAnecdotes}
            handleClick={handleNextClick}
            />
        </div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <MostVoted 
        anecdotes={anecdotes}
        mostVoted={mostVoted}
        votes={votes}
      />
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