import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>All: {good + neutral + bad}</div>
      <div>Average: {(good + 0 - 1) / (good + neutral + bad)}</div>
      <div>Positive: {(good / (good + neutral + bad)) * 100} % </div>
    </div>
  );
};

export default Statistics;
