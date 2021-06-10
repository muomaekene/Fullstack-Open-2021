import React, { useState } from "react";

import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedback, setAllFeedback] = useState([]);

  const handleGood = () => {
    setGood(good + 1);
    setAllFeedback(allFeedback.concat(1));
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAllFeedback(allFeedback.concat(1));
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAllFeedback(allFeedback.concat(1));
  };

  return (
    <div className="app">
      <div className="feedback">
        <h1>give Feedback</h1>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <div className="stats">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          feedback={allFeedback}
        />
      </div>
    </div>
  );
};

export default App;
