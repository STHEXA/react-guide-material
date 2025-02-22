import { useState } from "react";
const Example = () => {
  const [ValA, setValA] = useState(0)
  const [ValB, setValB] = useState(10)
  const [ValC, setValC] = useState(100)

  return (
    <>
      <p>ボタンを{ValA}回押しました!</p>
      <button onClick={() => {setValA(ValA + 1)}}>ボタンA</button>
      <p>ボタンを{ValB}回押しました!</p>
      <button onClick={() => {setValB(ValB + 1)}}>ボタンB</button>
      <p>ボタンを{ValC}回押しました!</p>
      <button onClick={() => {setValC(ValC + 1)}}>ボタンC</button>
    </>
  )
};

export default Example;
