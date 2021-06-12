import React from "react";

const Button = ({ clickGood, clickNeutral, clickBad }) => {
  return (
    <div className="feedback">
      <h1>give feedback</h1>
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>neutral</button>
      <button onClick={clickBad}>bad</button>
    </div>
  );
};

export default Button;
