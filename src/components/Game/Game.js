import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([
    { letters: "12345", key: "1" },
    { letters: "ABCDE", key: "2" },
  ]);

  function addGuess(newGuess) {
    setGuesses([...guesses, newGuess])
  }

  return (
    <>
      <Guesses guesses={guesses}></Guesses>
      <Guess setGuesses={addGuess}></Guess>
    </>
  );
}

export default Game;
