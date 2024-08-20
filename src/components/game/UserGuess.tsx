import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type UserGuessProps = {
  number: number;
  guess: number;
  setIsWin: Dispatch<SetStateAction<boolean>>;
};

const UserGuess = ({ number, guess, setIsWin }: UserGuessProps) => {
  const [correctNumbers, setCorrectNumbers] = useState<number>(0);
  const [correctPlaces, setCorrectPlaces] = useState<number>(0);

  useEffect(() => {
    handleCalculateCorrectNumbersAndPlaces();
  }, []);

  const handleCalculateCorrectNumbersAndPlaces = () => {
    const numberStr = number.toString();
    const guessStr = guess.toString();
    let correctTotal = 0;
    let placeTotal = 0;
    for (let index = 0; index < 4; index++) {
      const element = numberStr[index];
      if (guessStr.includes(element)) {
        correctTotal++;
      }
    }

    for (let index = 0; index < 4; index++) {
      if (numberStr[index] === guessStr[index]) {
        placeTotal++;
      }
    }

    if (placeTotal === 4) {
      setIsWin(true);
    }

    setCorrectNumbers(correctTotal - placeTotal);
    setCorrectPlaces(placeTotal);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {number
          .toString()
          .split("")
          .map((num, index) => (
            <span
              className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md"
              key={index}
            >
              {num}
            </span>
          ))}
      </div>
      <div className="flex items-center space-x-2">
        {correctPlaces > 0 && (
          <span className="bg-green-500 border-lime-200 border p-2 px-4 rounded-md">
            {correctPlaces}
          </span>
        )}
        {correctNumbers > 0 && (
          <span className="bg-red-300 border-pink-200 border p-2 px-4 rounded-md">
            {correctNumbers}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserGuess;
