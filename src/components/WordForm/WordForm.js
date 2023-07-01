import React from "react";

function WordForm({ onSubmit, gameStatus }) {
  const [text, setText] = React.useState('');

  function handleSubmit (event) {
    event.preventDefault();
    onSubmit(text);
    setText('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        disabled={!!gameStatus}
        type="text"
        value={text}
        pattern="[a-zA-Z]{5}"
        title="Provide 5 letters word"
        onChange={(event) => setText(event.target.value.toUpperCase().replace(/[^a-zA-Z]+/g, ''))}
      />
    </form>
  );
}

export default WordForm;
