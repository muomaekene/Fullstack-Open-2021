import React from "react";

const Total = ({ parts }) => {
  const [part1, part2, part3] = parts.parts;

  return (
    <div>
      <p>
        Number of exercises{" "}
        {part1.exercises + part2.exercises + part3.exercises}
      </p>
    </div>
  );
};

export default Total;
