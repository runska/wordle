import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-result">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess value={guesses[num]} answer={answer} key={num}></Guess>;
      })}
    </div>
  );
}

export default GuessResult;
