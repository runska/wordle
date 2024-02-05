import React from "react";

function InputGuess({ addToListOfGuesses, deactivated }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addToListOfGuesses(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-i≈nput">Enter guess:</label>
      <input
        required
        disabled={deactivated}
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

export default InputGuess;
