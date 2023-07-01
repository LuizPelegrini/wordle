import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((i) => 
        <span key={i} className={`cell ${guess?.statuses[i].status || ''}`}>
          {guess?.value[i] || ''}
        </span>
      )}
    </p>
  );
}

export default Guess;
