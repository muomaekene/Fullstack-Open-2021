import React from "react";

import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad, feedback }) => {
  const averageStats = () => {
    return (good + 0 - bad) / (good + neutral + bad) || 0;
  };

  const positiveStats = () => {
    return (good / (good + neutral + bad)) * 100 || 0;
  };

  const allFeedback = feedback.reduce((acc, value) => acc + value, 0);

  if (feedback.length === 0) {
    return (
      <div className="stats">
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div className="stats">
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={allFeedback} />
      <Statistic text="average" value={averageStats()} />
      <Statistic text="positive" value={positiveStats() + "%"} />
    </div>
  );
};

export default Statistics;
