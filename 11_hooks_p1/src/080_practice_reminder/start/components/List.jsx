import { useTodos } from "../context/todoContext";
import Item from "./Item";

const List = () => {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => {
        return <Item key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default List;
