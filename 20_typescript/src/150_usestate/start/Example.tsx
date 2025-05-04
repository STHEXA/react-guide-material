import { useState } from "react";

type User = {
  name: string;
  age: number;
};

type Todo = {
  id: number;
  text: string;
};

const Example = () => {
  const [text, setText] = useState("Hello");
  useState(0);

  const [animals, setAnimals] = useState<string[]>(["dog", "cat"]);
  const [users, setUsers] = useState<User[]>([{ name: "tom", age: 23 }]);
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, text: "Hello" }]);
};

export default Example;
