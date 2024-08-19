"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [number1, setNumber1] = useState<number | null>();
  const [number2, setNumber2] = useState<number | null>();
  const [number3, setNumber3] = useState<number | null>();
  const [number4, setNumber4] = useState<number | null>();

  const [numberIndex, setNumberIndex] = useState(1);

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

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 mt-4">
        <Card className="w-[800px]">
          <CardContent>
            <div className="p-4 flex flex-col gap-8">
              {/* Guess Line */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    1
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    2
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    3
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    4
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-red-300 border-pink-200 border p-2 px-4 rounded-md">
                    2
                  </span>
                  <span className="bg-green-500 border-lime-200 border p-2 px-4 rounded-md">
                    1
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    1
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    2
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    3
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    4
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-red-300 border-pink-200 border p-2 px-4 rounded-md">
                    2
                  </span>
                  <span className="bg-green-500 border-lime-200 border p-2 px-4 rounded-md">
                    1
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-4">
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    1
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    2
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    3
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    4
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-red-300 border-pink-200 border p-2 px-4 rounded-md">
                    2
                  </span>
                  <span className="bg-green-500 border-lime-200 border p-2 px-4 rounded-md">
                    1
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    1
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    2
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    3
                  </span>
                  <span className="bg-slate-200 text-xl text-blue-600 p-2 px-4 border-border-gray-300 rounded-md">
                    4
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-red-300 border-pink-200 border p-2 px-4 rounded-md">
                    2
                  </span>
                  <span className="bg-green-500 border-lime-200 border p-2 px-4 rounded-md">
                    1
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="!flex !justify-center !w-full">
            <div className="!flex !justify-center !w-full">
              <div className="w-80 grid grid-cols-4 gap-4">
                <Button
                  onClick={() => setNumberIndex(1)}
                  variant={"outline"}
                  className="text-center border border-indigo-300 p-4 rounded-lg"
                >
                  {number1 ? number1 : "?"}
                </Button>
                <Button
                  onClick={() => setNumberIndex(2)}
                  variant={"outline"}
                  className="text-center border border-indigo-300 p-4 rounded-lg"
                >
                  {number2 ? number2 : "?"}
                </Button>
                <Button
                  onClick={() => setNumberIndex(3)}
                  variant={"outline"}
                  className="text-center border border-indigo-300 p-4 rounded-lg"
                >
                  {number3 ? number3 : "?"}
                </Button>
                <Button
                  onClick={() => setNumberIndex(4)}
                  variant={"outline"}
                  className="text-center border border-indigo-300 p-4 rounded-lg"
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
              <Button>
                <Trash2 />
              </Button>
              <Button>
                <Check />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
