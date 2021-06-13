import React from "react";

import Part from "./Part";

const Content = ({ parts }) => {
  const [part1, part2, part3] = parts.parts;

  return (
    <>
      <Part name={part1.name} num={part1.exercises} />
      <Part name={part2.name} num={part2.exercises} />
      <Part name={part3.name} num={part3.exercises} />
    </>
  );
};

export default Content;
