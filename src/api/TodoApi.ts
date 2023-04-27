import customAxios from "../../lib/customAxios";
import { ModifyTodoParam } from "../../types/api/todo";
import { Todo } from "../../types/todo";
import CONSTANT from "../constant/constant.json";

const { TODO_CREATE_ERROR, TODO_GET_ERROR, TODO_UPDATE_ERROR, TODO_DELETE_ERROR} = CONSTANT;

const TodoApi = () => {
  const getTodos = async (todo: string) => {
    const res = await customAxios.get("/todos");
    
    if (res.statusCode === 401) alert("허가되지 않은 접근입니다."); // jwt unauthorized
    if (res.stausCode === 404) alert(TODO_GET_ERROR); // page not found ex) invalid url or api error
    return res;
  };

  const createTodo = async (todo: string) => {
    const res = await customAxios.post("/todos", { todo });

    if (res.stausCode === 404) alert(TODO_CREATE_ERROR);
    return res;
  }

  const modifyTodo = async ({ todoId, todo, isCompleted }: ModifyTodoParam) => {
    const res = await customAxios.put(`/todos/${todoId}`, {
      todo,
      isCompleted
    });
    
    if (res.stausCode === 404) alert(TODO_UPDATE_ERROR);
    return res;
  }

  const deleteTodo = async (todoId: number) => {
    const res = await customAxios.delete(`/todos/${todoId}`);

    if (res.stausCode === 404) aler(TODO_DELETE_ERROR);
    return res;
  }

  return {
    getTodos,
    createTodo,
    modifyTodo,
    deleteTodo
  };
};

export default TodoApi();
// try catch 멈추나? 