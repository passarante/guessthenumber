"use client";

import UserGuess from "@/components/game/UserGuess";

import { AuroraBackground } from "@/components/global/aurora-background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Check, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useKeypress from "react-use-keypress";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  // const {
  //   guess,
  //   number1,
  //   number2,
  //   number3,
  //   number4,
  //   numberIndex,
  //   setGuess,
  //   setNumber1,
  //   setNumber2,
  //   setNumber3,
  //   setNumber4,
  //   setNumberIndex,
  // } = useGameStore((state) => state);

  const [guess, setGuess] = useState<number>(0);
  const [number1, setNumber1] = useState<number | null | undefined>();
  const [number2, setNumber2] = useState<number | null | undefined>();
  const [number3, setNumber3] = useState<number | null | undefined>();
  const [number4, setNumber4] = useState<number | null | undefined>();
  const [numberIndex, setNumberIndex] = useState<number>(1);
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [userGuess, setUserGuess] = useState<number[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    //3️⃣ bring the last item into view
    scrollRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
    });
  }, [userGuess]);

  useKeypress(
    [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Enter",
      "Backspace",
      "Delete",
    ],
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        checkGuess();
      } else if (event.key === "Backspace" || event.key === "Delete") {
        handleRemove();
      } else {
        handleNumberPress(parseInt(event.key));
      }
    }
  );

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
    <div className="z-10 max-w-5xl mx-auto h-full flex flex-1 p-4 my-2 rounded-lg ">
      <AuroraBackground className="p-4 rounded-xl h-[860px] shadow-xl">
        <Card className="z-10">
          <CardHeader>
            <CardTitle>Sayı Bulmaca </CardTitle>
            <CardDescription>Sayı tahmin oyunu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 md:gap-4 z-10">
              <div className="md:col-span-2 ">
                {userGuess.length > 0 && (
                  <Card className="md:w-[500px]">
                    <CardContent>
                      <div
                        className="p-2 flex flex-col gap-4 max-h-40 md:max-h-[300px] scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-sky-200 scrollbar-track-slate-50 overflow-y-scroll"
                        ref={scrollRef}
                      >
                        {/* <div>{guess}</div> */}
                        {/* Guess Line */}

                        {userGuess.map((num, index) => (
                          <UserGuess
                            key={index}
                            number={num}
                            guess={guess!}
                            isLast={index === userGuess.length - 1}
                            setIsWin={setIsWin}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="w-60 mx-auto md:w-full mt-4 md:mt-0">
                <Card>
                  <CardHeader className="flex justify-center w-full">
                    <div className="flex justify-center w-full">
                      <div className="md:w-80 w-60 grid grid-cols-4 gap-4 ">
                        <Button
                          onClick={() => setNumberIndex(1)}
                          variant={"outline"}
                          className={`text-center border border-indigo-300 md:p-4 p-2 rounded-lg ${
                            numberIndex === 1 ? "border-green-300" : ""
                          }`}
                        >
                          {number1 ? number1 : "?"}
                        </Button>
                        <Button
                          onClick={() => setNumberIndex(2)}
                          variant={"outline"}
                          className={`text-center border border-indigo-300 md:p-4 p-2 rounded-lg ${
                            numberIndex === 2 ? "border-green-300" : ""
                          }`}
                        >
                          {number2 ? number2 : "?"}
                        </Button>
                        <Button
                          onClick={() => setNumberIndex(3)}
                          variant={"outline"}
                          className={`text-center border border-indigo-300 md:p-4 p-2 rounded-lg ${
                            numberIndex === 3 ? "border-green-300" : ""
                          }`}
                        >
                          {number3 ? number3 : "?"}
                        </Button>
                        <Button
                          onClick={() => setNumberIndex(4)}
                          variant={"outline"}
                          className={`text-center border border-indigo-300 md:p-4 p-2 rounded-lg ${
                            numberIndex === 4 ? "border-green-300" : ""
                          }`}
                        >
                          {number4 ? number4 : "?"}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex justify-center w-full items-center">
                    <div className="w-80 grid grid-cols-3 md:gap-4 gap-2 place-items-center  ">
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(1)}
                      >
                        1
                      </Button>
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(2)}
                      >
                        2
                      </Button>
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(3)}
                      >
                        3
                      </Button>
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(4)}
                      >
                        4
                      </Button>
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(5)}
                      >
                        5
                      </Button>
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(6)}
                      >
                        6
                      </Button>
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(7)}
                      >
                        7
                      </Button>
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(8)}
                      >
                        8
                      </Button>
                      <Button
                        className="w-8 md:w-16"
                        onClick={() => handleNumberPress(9)}
                      >
                        9
                      </Button>
                      <Button
                        className="w-8 md:w-16 dark:text-red-500"
                        onClick={handleRemove}
                      >
                        <div>
                          <Trash2 className="w-6 h-6" />
                        </div>
                      </Button>
                      <Button className="w-8 md:w-16" onClick={checkGuess}>
                        <div>
                          <Check className="w-6 h-6" />
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div>
              <h4 className="text-xl font-bold">Nasıl Oynanır:</h4>
              <ul className="text-sm">
                <li>
                  * Rakamları birbirinden farklı 4 haneli bir sayıyı tahmin
                  etmelisiniz.
                </li>
                <li>
                  * Yaptığınız tahminler solda görünecektir. Doğru sayıyı
                  bulabilmeniz için size tahmininizle ilgili bilgi veriyoruz.
                </li>
                <li>
                  * Tahmininizdeki yeri doğru olan rakamları yeşil kutuda
                  gösteriyoruz.
                </li>
                <li>
                  * Tahmininizdeki <b>doğru olan ancak yeri doğru olmayan</b>{" "}
                  rakamları kırmızı kutuda gösteriyoruz.
                </li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      </AuroraBackground>
    </div>
  );
}
