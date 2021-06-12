import React, { useState } from "react";

import Statistics from "./components/Statistics";
import Button from "./components/Button";

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
      <Button
        clickGood={handleGood}
        clickNeutral={handleNeutral}
        clickBad={handleBad}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        feedback={allFeedback}
      />
    </div>
  );
};

export default App;
