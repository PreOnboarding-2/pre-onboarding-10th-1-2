import { useState, useEffect, useCallback } from "react";
import { Todo } from "../../types/todo";
import TodoApi from "../../api/TodoApi";
import { getToken } from "../../utils/token";
import { TOKEN_KEY } from "../../constant/constant";

const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const modifyTodo = (modifiedTodo: Todo) => {
    const newTodos = todos.map(todo => (todo.id === modifiedTodo.id ? { ...modifiedTodo } : todo));
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getTodos = useCallback(async () => {
    try {
      const data = await TodoApi.getTodos();
      setTodos(data);
    } catch (error) {
      alert("todolist를 가져오는데 실패하였습니다");
    }
  }, [setTodos]);

  useEffect(() => {
    if (getToken(TOKEN_KEY) === null) {
      return;
    }
    getTodos();
  }, []);

  return {
    todos,
    createTodo,
    modifyTodo,
    deleteTodo,
  };
};

export default useTodoList;
