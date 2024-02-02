import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  
  return (
    <p className="guess">
      {range(5).map((num) => {
        const cellStatus = result ? result[num].status : "";

        return (
          <span className={"cell " + cellStatus} key={num}>
            {value ? value[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
