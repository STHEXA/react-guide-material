import { useState } from "react";
import TaskList from "./TaskList";

export type Todo = {
  id: number;
  text: string;
};

const Example = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState<Todo[]>([]);

  const addList = (text: string): void => {
    const todo: Todo = { id: list.length + 1, text: text };
    setList([...list, todo]);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addList(text)}>追加</button>
      <TaskList list={list} />
    </>
  );
};

export default Example;
