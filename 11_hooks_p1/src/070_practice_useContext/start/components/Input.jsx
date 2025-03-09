import React from "react";
import { useCalcDispatch, useCalcState } from "../context/CalcProvider";

export default function Input({ name }) {
  const state = useCalcState();
  const dispatch = useCalcDispatch();
  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        value={state.name}
        onChange={numChangeHandler}
      />
    </div>
  );
}
