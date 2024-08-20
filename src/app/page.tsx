"use client";
import UserGuess from "@/components/game/UserGuess";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Check, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const [guess, setGuess] = useState<number>(0);
  const [number1, setNumber1] = useState<number | null>();
  const [number2, setNumber2] = useState<number | null>();
  const [number3, setNumber3] = useState<number | null>();
  const [number4, setNumber4] = useState<number | null>();
  const [numberIndex, setNumberIndex] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const [userGuess, setUserGuess] = useState<number[]>([]);

  useEffect(() => {
    handleCreateRandomNumber();
  }, []);

  useEffect(() => {
    let timeOut = null;
    if (isWin) {
      timeOut = setTimeout(() => {
        toast({
          title: "Efferim... Doğru rakam " + guess + " idi...",
        });
        setUserGuess([]);
        handleCreateRandomNumber();
        setNumber1(null);
        setNumber2(null);
        setNumber3(null);
        setNumber4(null);
        setNumberIndex(1);
        setGameOver(false);
        setIsWin(false);
      }, 500);
    }
    () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, [isWin]);

  const handleCreateRandomNumber = () => {
    let numStr = ``;
    let tempNumbers = NUMBERS;

    for (let index = 0; index < 4; index++) {
      const randomIndex = Math.floor(Math.random() * tempNumbers.length);
      const element = tempNumbers[randomIndex];
      tempNumbers = tempNumbers.filter((num) => num !== element);
      numStr += element;
    }

    setGuess(parseInt(numStr));
  };

  const handleNumberPress = (pressedNumber: number) => {
    if (numberIndex == 1) {
      setNumber1(pressedNumber);
      setNumberIndex(2);
    } else if (numberIndex == 2) {
      setNumber2(pressedNumber);
      setNumberIndex(3);
    } else if (numberIndex == 3) {
      setNumber3(pressedNumber);
      setNumberIndex(4);
    } else if (numberIndex == 4) {
      setNumber4(pressedNumber);
      setNumberIndex(1);
    }
  };

  const handleRemove = () => {
    if (numberIndex == 1) {
      setNumber1(null);
    } else if (numberIndex == 2) {
      setNumber2(null);
      setNumberIndex(1);
    } else if (numberIndex == 3) {
      setNumber3(null);
      setNumberIndex(2);
    } else if (numberIndex == 4) {
      setNumber4(null);
      setNumberIndex(3);
    }
  };

  const checkGuess = () => {
    if (
      number1 &&
      number2 &&
      number3 &&
      number4 &&
      (number1 != number2 ||
        number1 != number3 ||
        number1 != number4 ||
        number2 != number3 ||
        number2 != number4 ||
        number3 != number4)
    ) {
      setUserGuess([
        ...userGuess,
        parseInt(`${number1}${number2}${number3}${number4}`),
      ]);
    } else {
      return;
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-b from-blue-100 via-pink-100 to-indigo-900 h-full flex flex-1 p-4 my-4 rounded-lg">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 mt-4">
          {userGuess.length > 0 && (
            <Card className="w-[500px]">
              <CardContent>
                <div className="p-2 flex flex-col gap-4">
                  {/* <div>{guess}</div> */}
                  {/* Guess Line */}

                  {userGuess.map((num, index) => (
                    <UserGuess
                      key={index}
                      number={num}
                      guess={guess}
                      setIsWin={setIsWin}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardHeader className="!flex !justify-center !w-full">
              <div className="!flex !justify-center !w-full">
                <div className="w-80 grid grid-cols-4 gap-4">
                  <Button
                    onClick={() => setNumberIndex(1)}
                    variant={"outline"}
                    className={`text-center border border-indigo-300 p-4 rounded-lg ${
                      numberIndex === 1 ? "border-green-300" : ""
                    }`}
                  >
                    {number1 ? number1 : "?"}
                  </Button>
                  <Button
                    onClick={() => setNumberIndex(2)}
                    variant={"outline"}
                    className={`text-center border border-indigo-300 p-4 rounded-lg ${
                      numberIndex === 2 ? "border-green-300" : ""
                    }`}
                  >
                    {number2 ? number2 : "?"}
                  </Button>
                  <Button
                    onClick={() => setNumberIndex(3)}
                    variant={"outline"}
                    className={`text-center border border-indigo-300 p-4 rounded-lg ${
                      numberIndex === 3 ? "border-green-300" : ""
                    }`}
                  >
                    {number3 ? number3 : "?"}
                  </Button>
                  <Button
                    onClick={() => setNumberIndex(4)}
                    variant={"outline"}
                    className={`text-center border border-indigo-300 p-4 rounded-lg ${
                      numberIndex === 4 ? "border-green-300" : ""
                    }`}
                  >
                    {number4 ? number4 : "?"}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex justify-center w-full">
              <div className="w-80 grid grid-cols-3 gap-4">
                <Button onClick={() => handleNumberPress(1)}>1</Button>
                <Button onClick={() => handleNumberPress(2)}>2</Button>
                <Button onClick={() => handleNumberPress(3)}>3</Button>
                <Button onClick={() => handleNumberPress(4)}>4</Button>
                <Button onClick={() => handleNumberPress(5)}>5</Button>
                <Button onClick={() => handleNumberPress(6)}>6</Button>
                <Button onClick={() => handleNumberPress(7)}>7</Button>
                <Button onClick={() => handleNumberPress(8)}>8</Button>
                <Button onClick={() => handleNumberPress(9)}>9</Button>
                <Button onClick={handleRemove}>
                  <Trash2 />
                </Button>
                <Button onClick={checkGuess}>
                  <Check />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
