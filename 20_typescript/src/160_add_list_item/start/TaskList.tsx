import { Todo } from "./Example";

type TaskListProps = {
  list: Todo[];
};

export default function TaskList(props: TaskListProps) {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
