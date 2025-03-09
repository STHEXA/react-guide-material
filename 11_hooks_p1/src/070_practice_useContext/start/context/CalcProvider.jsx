import React, { createContext, useContext, useReducer } from "react";
const initState = {
  a: 1,
  b: 2,
  result: 3,
};
const calcStateContext = createContext();
const calcDispatchContext = createContext();

export default function CalcProvider({ children }) {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "change": {
        const { name, value } = payload;
        return { ...state, [name]: value };
      }
      case "add": {
        return { ...state, result: state.a + state.b };
      }
      case "minus": {
        return { ...state, result: state.a - state.b };
      }
      case "divide": {
        return { ...state, result: state.a / state.b };
      }
      case "multiply": {
        return { ...state, result: state.a * state.b };
      }
      default:
        throw new Error("operator is invalid");
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <calcStateContext.Provider value={state}>
      <calcDispatchContext.Provider value={dispatch}>
        {children}
      </calcDispatchContext.Provider>
    </calcStateContext.Provider>
  );
}

export const useCalcState = () => {
  return useContext(calcStateContext);
};
export const useCalcDispatch = () => {
  return useContext(calcDispatchContext);
};
