import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <label htmlFor="456">ラベル</label>
      <input
        id="123"
        type="text"
        placeholder="こんにちは"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <textarea
        name="text"
        id="456"
        placeholder="こんにちは"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      ></textarea>
      <h3>{val}</h3>
      <button
        onClick={() => {
          setVal("");
        }}
      >
        クリア
      </button>
    </>
  );
};

export default Example;
