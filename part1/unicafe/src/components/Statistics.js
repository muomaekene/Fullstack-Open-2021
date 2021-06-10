import React from "react";

const Statistics = ({ title, good, neutral, bad, feedback }) => {
  const averageStats = () => {
    return (good + 0 - 1) / good + neutral + bad;
  };

  const positiveStats = () => {
    return (good / (good + neutral + bad)) * 100;
  };

  if (feedback.length === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {feedback.reduce((a, b) => a + b, 0)}</div>
      <div>average: {averageStats()}</div>
      <div>positive: {positiveStats()}% </div>
    </div>
  );
};

export default Statistics;
