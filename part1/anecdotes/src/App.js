import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "if it hurts, do it more often.",
    "Adding manpower to a late software project makes it later.",
    "The first 90 perent of the code accounts for the first 90 percent of the development time... the remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as clearly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const initialVotes = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(initialVotes);

  // event listeners
  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const totalVote = [...vote];
    totalVote[selected] += 1;
    setVote(totalVote);
  };

  return (
    <div className="App">
      <div>
        "{anecdotes[selected]}"
        <br />
        has {vote[selected]} votes
      </div>

      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
    </div>
  );
};

export default App;
