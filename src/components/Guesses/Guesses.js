import React from "react";

function Guesses({ guesses }) {
  console.log(guesses)
  return (
    <>
      {guesses.map((guess) => {
        return <div key={guess.key}>{guess.letters}</div>;
      })}
    </>
  );
}

export default Guesses;
