import React from "react";

function Square({value, onSquareClick}) {
    return (
      <button className="square matchWinner" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  export default Square;