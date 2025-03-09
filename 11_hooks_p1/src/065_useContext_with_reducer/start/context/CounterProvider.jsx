import React, { createContext, useContext, useReducer } from "react";
const CounterContext = createContext();
const CounterDispatchContext = createContext();

export default function CounterProvider({ children }) {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);
  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
}

export const useCounter = () => {
  return useContext(CounterContext);
};

export const useCounterDispatch = () => {
  return useContext(CounterDispatchContext);
};
