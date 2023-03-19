import React, { useState, useEffect } from "react";
import "./screen.css";

const Screen = () => {
  const winningCases = ["012", "345", "678", "036", "147", "258", "048", "246"];
  const [userOne, setUserOne] = useState("");
  const [userTwo, setUserTwo] = useState("");
  const [isUserTwo, setIsUserTwo] = useState(false);
  const [winner, setWinner] = useState("");

  const handleClick = (e, index) => {
    if (winner === "") {
      if (isUserTwo === false) {
        setUserOne((prev) => prev + index);
        e.target.innerHTML = "X";
        e.target.disabled = true;
        setIsUserTwo(true);
      } else {
        setUserTwo((prev) => prev + index);
        e.target.innerHTML = "O";
        e.target.disabled = true;
        setIsUserTwo(false);
      }
    }
  };

  const handleReset = (e) => {
    window.location.reload(true);
  };

  useEffect(() => {
    winningCases.map((winningCase) => {
      if (userOne.includes(winningCase)) setWinner("User One is the winner");
      if (userTwo.includes(winningCase)) setWinner("User two is the winner");
      if (userOne.length + userTwo.length === 9 && winner === "")
        setWinner("It's a tie");
    });
  }, [isUserTwo]);

  return (
    <div className="wrapper">
      <div className="top">
        <h6 className="winner">{winner}</h6>
        <button className="btn-reset" onClick={handleReset}>
          {" "}
          Reset{" "}
        </button>
      </div>
      <div className="keypads">
        {new Array(9).fill().map((item, index) => {
          return (
            <button
              key={`${index}`}
              className="btn"
              onClick={(e) => handleClick(e, index)}></button>
          );
        })}
      </div>
    </div>
  );
};

export default Screen;
