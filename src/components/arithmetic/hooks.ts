import React, { useCallback, useEffect, useState } from "react";

export const ArithmeticType = {
  MUL_BY_11: 1,
  MUL_OF_TOTAL_10_COMBINATION: 2,
  SQUARE: 101,
} as const;
export type ArithmeticType = typeof ArithmeticType[keyof typeof ArithmeticType];

export const useParams = () => {
  const [mode, setMode] = useState<ArithmeticType>(ArithmeticType.MUL_BY_11);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);
  const init = useCallback(() => {
    switch (mode) {
      case ArithmeticType.MUL_BY_11:
        setNum1(Math.floor(10 + Math.random() * 90));
        setNum2(11);
        break;
      case ArithmeticType.MUL_OF_TOTAL_10_COMBINATION:
        const tens = (1 + Math.floor(Math.random() * 9)) * 10;
        const unit1 = 1 + Math.floor(Math.random() * 9);
        const unit2 = 10 - unit1;
        setNum1(tens + unit1);
        setNum2(tens + unit2);
        break;
      case ArithmeticType.SQUARE:
        const num = Math.floor(10 + Math.random() * 90);
        setNum1(num);
        setNum2(num);
        break;
      default:
        break;
    }
    setAnswer(0);
  }, [mode]);
  useEffect(() => {
    init();
  }, [init]);

  const proceed = useCallback(() => {
    if (answer) {
      init();
    } else {
      setAnswer(num1 * num2);
    }
  }, [init, num1, num2, answer]);

  const changeMode = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const mode = e.currentTarget.getAttribute("data-mode");
      if (mode) {
        setMode(Number(mode) as ArithmeticType);
      }
    },
    []
  );

  const [isStarted, setStarted] = useState(false);
  const start = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setStarted(true);
    e.stopPropagation();
  }, []);

  return { answer, changeMode, isStarted, num1, num2, proceed, start };
};
