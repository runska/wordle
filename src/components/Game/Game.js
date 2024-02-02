import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputGuess from "../InputGuess/InputGuess";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(newGuess) {
    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer}></GuessResult>
      <InputGuess addToListOfGuesses={addGuess}></InputGuess>
    </>
  );
}

export default Game;
