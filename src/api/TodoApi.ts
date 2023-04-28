import customAxios from "../lib/customAxios";
import { ModifyTodoParam } from "../types/api/todo";

const TodoApi = () => {
  const getTodos = async () => {
    const res = await customAxios.get("/todos");

    return res.data;
  };

  const createTodo = async (todo: string) => {
    const res = await customAxios.post("/todos", { todo });

    return res.data;
  };

  const modifyTodo = async ({ todoId, todo, isCompleted }: ModifyTodoParam) => {
    const res = await customAxios.put(`/todos/${todoId}`, {
      todo,
      isCompleted,
    });

    return res.data;
  };

  const deleteTodo = async (todoId: number) => {
    const res = await customAxios.delete(`/todos/${todoId}`);

    return res.data;
  };

  return {
    getTodos,
    createTodo,
    modifyTodo,
    deleteTodo,
  };
};

export default TodoApi();
