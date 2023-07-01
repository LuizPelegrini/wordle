import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordForm from '../WordForm';
import GuessesList from '../GuessesList';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

let guessesLeft = NUM_OF_GUESSES_ALLOWED;

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('');

  function handleSubmit(guess) {
    const newGuess = {
      id: crypto.randomUUID(),
      value: guess,
      statuses: checkGuess(guess, answer)
    };

    setGuesses([
      ...guesses,
      newGuess
    ]);


    guessesLeft--;

    if (guess === answer) {
      setGameResult('win');
      return;
    }

    if(guessesLeft === 0){
      setGameResult('lose');
    }
  }

  return (
    <>
      {!!gameResult && (
        <Banner
          result={gameResult}
          answer={answer}
          numOfGuesses={NUM_OF_GUESSES_ALLOWED - guessesLeft}
        />)
      }
      <GuessesList guesses={guesses}/>
      <WordForm onSubmit={handleSubmit} gameStatus={gameResult}/>
    </>
  );
}

export default Game;
