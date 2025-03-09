import React from "react";
import { useCalcState } from "../context/CalcProvider";

export default function Result() {
  const state = useCalcState();
  return <h3>結果：{state.result}</h3>;
}
