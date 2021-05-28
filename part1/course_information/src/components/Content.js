import React from "react";
import Part from "./Part";

const Content = (props) => {
  const name = props.parts;
  const num = props.exercises;

  return (
    <div>
      <Part name={name[0]} num={num[0]} />
      <Part name={name[1]} num={num[1]} />
      <Part name={name[2]} num={num[2]} />
    </div>
  );
};

export default Content;
