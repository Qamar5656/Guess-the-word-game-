import React, { useState } from "react";

const GuessWord = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [tryCount, setTryCount] = useState(0);
  const [target, setTarget] = useState(
    () => Math.floor(Math.random() * 100) + 1
  );

  const handleCheckNumber = () => {
    const guess = Number(number);

    if (!guess) {
      alert("Please enter a number");
      return;
    }

    if (guess < 1 || guess > 100) {
      alert("Number should be between 1 and 100");
      return;
    }

    setTryCount((prev) => prev + 1);

    if (guess > target) {
      setMessage("Choose a smaller number. Your number is too big.");
    } else if (guess < target) {
      setMessage("Choose a greater number. Your number is too small.");
    } else {
      handleCorrectGuess();
    }

    setNumber("");
  };

  const handleReset = () => {
    setMessage("");
    setNumber("");
    setTryCount(0);
    setTarget(Math.floor(Math.random() * 100) + 1);
  };

  const handleCorrectGuess = () => {
    setMessage("🎉 Congratulations! You guessed the number. Game Over");
    setTimeout(() => {
      handleReset();
    }, 3000);
  };

  return (
    <div className="container">
      <h2 className="text-center py-7 text-2xl font-bold">
        Guess The Word Game
      </h2>
      <div className="container flex items-center justify-center gap-3">
        <input
          type="number"
          className="border-2 focus:outline-blue-600 p-2 rounded-xl w-1/2"
          placeholder="Guess the Number between 1 and 100"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCheckNumber();
            }
          }}
        />
        <button
          className="border bg-blue-600 text-white font-bold p-2 rounded-xl cursor-pointer"
          onClick={handleCheckNumber}
        >
          Check Number
        </button>
        <button
          className="border bg-blue-600 text-white font-bold p-2 rounded-xl cursor-pointer"
          onClick={handleReset}
        >
          Reset Game
        </button>
        {tryCount > 0 && <p>Your attempts are {tryCount}</p>}
      </div>
      <div className="container text-center py-7">
        <p className="text-black">{message}</p>
        {message.includes("Congratulations") && (
          <p>The Target number was {target}</p>
        )}
      </div>
    </div>
  );
};

export default GuessWord;
