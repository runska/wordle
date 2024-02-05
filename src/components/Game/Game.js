import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessResult from "../GuessResult/GuessResult";
import HappyBanner from "../HappyBanner/HappyBanner";
import InputGuess from "../InputGuess/InputGuess";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(newGuess) {
    setGuesses([...guesses, newGuess]);
  }

  const userSucceeded = guesses.includes(answer);
  console.log(userSucceeded);
  const userFailed =
    !userSucceeded && guesses.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessResult guesses={guesses} answer={answer}></GuessResult>
      <InputGuess
        addToListOfGuesses={addGuess}
        deactivated={userFailed || userSucceeded}
      ></InputGuess>
      {userSucceeded && <HappyBanner numOfGuesses={guesses.length} />}
      {userFailed && <SadBanner answer={answer}></SadBanner>}
    </>
  );
}

export default Game;
