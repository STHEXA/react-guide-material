import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];
  const [list, setList] = useState(todosList);
  const completed = (id) => {
    console.log(id);
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  };
  return (
    <>
      <h2>Reminder</h2>
      <List list={list} completed={completed} />
      <Form list={list} setList={setList} />
    </>
  );
};
export default Todo;
