import React from "react";
import Part from "./Part";

const Content = (props) => {
  const courses = props.parts;

  return (
    <div>
      <Part name={courses[0].name} num={courses[0].exercises} />
      <Part name={courses[1].name} num={courses[1].exercises} />
      <Part name={courses[2].name} num={courses[2].exercises} />
    </div>
  );
};

export default Content;
