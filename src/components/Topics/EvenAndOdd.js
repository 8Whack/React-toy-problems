import React, { useState } from "react";

function EvensAndOdds() {
  const [userInput, setUserInput] = useState("");
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);

  const handleClick = (param) => {
    let arr = param.split(",").map(function (item) {
      return parseInt(item, 10);
    });
    let evensArr = [];
    let oddsArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evensArr.push(arr[i]);
      } else {
        oddsArr.push(arr[i]);
      }
    }
    setEven(evensArr);
    setOdd(oddsArr);
  };

  return (
    
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input
          className="inputLine"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => handleClick(userInput)}
        >
          button
        </button>
        <span className="resultsBox"> Evens:{even}</span>
        <span className="resultsBox"> Odds:{odd}</span>
      </div>
    
  );
}

export default EvensAndOdds