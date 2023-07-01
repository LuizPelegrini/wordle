import React from "react";

function Banner({ result, answer, numOfGuesses }) {
  const className = result === 'win' ? 'happy banner' : 'sad banner';

  const BannerContent = result === 'win' 
    ? <><strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} {numOfGuesses > 1 ? 'guesses' : 'guess'}</strong>.</>
    : <>Sorry, the correct answer is <strong>{answer}</strong>.</>

  return (
    <div className={className}>
      <p>{BannerContent}</p>
    </div>
  );
}

export default Banner;
