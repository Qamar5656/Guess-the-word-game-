import React, { useRef, useState } from "react";

const GuessWord = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [tryCount, setTryCount] = useState(0);
  const [target, setTarget] = useState(
    useRef(Math.floor(Math.random() * 100) + 1)
  );

  const handleCheckNumber = () => {
    setTryCount((prev) => prev + 1);
    const guess = Number(number);

    if (!guess) {
      alert("Please enter a number");
      return;
    }

    if (guess < 1 || guess > 100) {
      alert("Number should be between 1 and 100");
      return;
    }

    if (guess > target.current) {
      setMessage("Choose a smaller number. Your number is too big.");
    } else if (guess < target.current) {
      setMessage("Choose a greater number. Your number is too small.");
    } else {
      setMessage("🎉 Congratulations! You guessed the number.");
    }
    setNumber("");
  };
  const handleReset = () => {
    setMessage("");
    setNumber("");
    setTryCount(0);
    setTarget(Math.floor(Math.random() * 100) + 1);
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
        {tryCount > 0 ? <p>Your attempts are {tryCount}</p> : ""}
      </div>
      <div className="container text-center py-7">
        <p className="text-black">{message}</p>
        {message.includes("Congratulations") && (
          <p>The Target number was {target.current}</p>
        )}
      </div>
    </div>
  );
};

export default GuessWord;
