import useTodoList from "../../hooks/todo/useTodoList";
import TodoItem from "./item/TodoItem";

const TodoList = () => {
  const { todos } = useTodoList();
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
