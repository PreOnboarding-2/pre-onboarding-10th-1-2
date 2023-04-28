import { TodoListProps } from "../../types/todo";
import TodoItem from "./item/TodoItem";

const TodoList = (props: TodoListProps) => {
  const { todos, modifyTodo, deleteTodo } = props;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} item={todo} modifyTodo={modifyTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
