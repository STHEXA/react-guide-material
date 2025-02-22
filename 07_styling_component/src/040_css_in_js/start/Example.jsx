import { useState } from "react";
import styled from "styled-components";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <SBtn isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </SBtn>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;

const SBtn = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(isSelected) => (isSelected ? "pink" : "")};
`;
