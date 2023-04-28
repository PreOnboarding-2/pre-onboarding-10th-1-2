import { Todo } from "../../types/todo";
import TodoItem from "./item/TodoItem";

interface Props {
  todos: Todo[];
  modifyTodo: (item: Todo) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = (props: Props) => {
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
