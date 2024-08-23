import { create } from "zustand";

type Store = {
  guess: number | null;
  number1: number | null;
  number2: number | null;
  number3: number | null;
  number4: number | null;
  numberIndex: number | null;
  setGuess: (guess: number) => void;
  setNumber1: (number1: number | null) => void;
  setNumber2: (number2: number | null) => void;
  setNumber3: (number3: number | null) => void;
  setNumber4: (number4: number | null) => void;
  setNumberIndex: (numberIndex: number) => void;
};

const useGameStore = create<Store>()((set) => ({
  guess: null,
  number1: null,
  number2: null,
  number3: null,
  number4: null,
  numberIndex: 2,
  setGuess: (guess: number) => set({ guess }),
  setNumber1: (number1: number | null) => set({ number1 }),
  setNumber2: (number2: number | null) => set({ number2 }),
  setNumber3: (number3: number | null) => set({ number3 }),
  setNumber4: (number4: number | null) => set({ number4 }),
  setNumberIndex: (numberIndex: number) => set({ numberIndex }),
}));

export default useGameStore;
