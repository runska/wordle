import React from "react";

function Guess({ setGuesses }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        // Gjør noe med "guess" her kanskje?
        console.log("You guessed:", guess);
        setGuesses({letters: guess, key: self.crypto.randomUUID()});
        setGuess("")
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]{5}"
        title="Five letter word"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default Guess;
