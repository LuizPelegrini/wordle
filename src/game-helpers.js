/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export function checkGuess2(guess, answer) {
  const guessArray = guess.split('');
  const answerArray = answer.split('');

  const result = guessArray.reduce((result, char, index) => {
    if(!answer.includes(char)){
      result.push({ letter: char, status: 'incorrect' })
      return result;
    }

    const indexes = answerArray
      .map((c, i) => { if (c === char) return i; return -1; })
      .filter((v) => v >= 0);

    if(indexes.includes(index)) {
      result.push({ letter: char, status: 'correct' })
    } else {
      result.push({ letter: char, status: 'misplaced' })
    }

    return result;
  }, []);

  return result;
}
