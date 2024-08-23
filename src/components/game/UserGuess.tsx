import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type UserGuessProps = {
  number: number;
  guess: number;
  setIsWin: Dispatch<SetStateAction<boolean>>;
  isLast: boolean;
};

const UserGuess = ({ number, guess, setIsWin, isLast }: UserGuessProps) => {
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
    <div className="flex items-center justify-between gap-4 ">
      <div
        className={`flex items-center md:space-x-4 space-x-2 px-2 py-1 ${
          isLast
            ? "border border-red-500  rounded-lg animate-pulse"
            : "opacity-50"
        } `}
      >
        {number
          .toString()
          .split("")
          .map((num, index) => (
            <span
              className="bg-slate-200 min-w-6 text-sm md:text-base text-center   text-blue-600 p-1 px-2 md:p-2 md:px-4 border-border-gray-300 rounded-md"
              key={index}
            >
              {num}
            </span>
          ))}
      </div>
      <div className="ml-4 flex items-center space-x-2">
        {correctPlaces > 0 && (
          <span className="bg-green-500 min-w-6 text-sm md:text-base text-center border-lime-200 border p-1 px-1 md:p-2 md:px-4 rounded-md">
            {correctPlaces}
          </span>
        )}
        {correctNumbers > 0 && (
          <span className="bg-red-300 min-w-6 text-sm md:text-base text-center border-pink-200 border p-1 px-1 md:p-2 md:px-4 rounded-md">
            {correctNumbers}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserGuess;
