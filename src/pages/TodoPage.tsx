import TodoForm from "../components/todo/form/TodoForm";
import TodoList from "../components/todo/TodoList";
import useTodoList from "../hooks/todo/useTodoList";

const TodoPage = () => {
  const { todos, createTodo, modifyTodo, deleteTodo } = useTodoList();
  return (
    <div className="page">
      <TodoForm createTodo={createTodo} />
      <TodoList todos={todos} modifyTodo={modifyTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPage;
