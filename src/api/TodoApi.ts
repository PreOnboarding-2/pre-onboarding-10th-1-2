import customAxios from "../../lib/customAxios";
import { ModifyTodoParam } from "./types/todo";
// import { Todo } from "../../types/todo";
import CONSTANT from "../constant/constant.json";

const { TODO_CREATE_ERROR, TODO_GET_NOT_FOUND, TODO_GET_UNAUTHORIZED, TODO_UPDATE_ERROR, TODO_DELETE_ERROR } = CONSTANT;

const TodoApi = () => {
  const getTodos = async () => {
    const res = await customAxios.get("/todos");

    if (res.status === 401) alert(TODO_GET_UNAUTHORIZED);
    if (res.staus === 404) alert(TODO_GET_NOT_FOUND);
    return res.data;
  };

  const createTodo = async (todo: string) => {
    const res = await customAxios.post("/todos", { todo });

    if (res.staus === 404) alert(TODO_CREATE_ERROR);
    return res.data;
  }

  const modifyTodo = async ({ todoId, todo, isCompleted }: ModifyTodoParam) => {
    const res = await customAxios.put(`/todos/${todoId}`, {
      todo,
      isCompleted
    });

    if (res.staus === 404) alert(TODO_UPDATE_ERROR);
    return res.data;
  }

  const deleteTodo = async (todoId: number) => {
    const res = await customAxios.delete(`/todos/${todoId}`);

    if (res.staus === 404) alert(TODO_DELETE_ERROR);
    return res.data;
  }

  return {
    getTodos,
    createTodo,
    modifyTodo,
    deleteTodo
  };
};

export default TodoApi();
