import { useState, useEffect, useRef, useCallback } from "react";
import { Todo } from "../../types/todo";
import TodoApi from "../../api/TodoApi";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isModifyMode, setIsModifyMode] = useState<Todo | null>(null);
  const [modifyTodoInput, setModifyTodoInput] = useState("");
  const newTodoInputRef = useRef<HTMLInputElement>(null);

  const initTodos = (todos: Todo[]) => {
    setTodos(todos);
  };

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
      initTodos(data);
    } catch (error) {
      alert("todolist를 가져오는데 실패하였습니다");
    }
  }, [initTodos]);

  const handleTodoFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleTodoFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      if (newTodo.trim() !== "") {
        const data = await TodoApi.createTodo(newTodo);
        createTodo(data);
      }
      setNewTodo("");
    } catch (error) {
      alert("todo 추가를 실패하였습니다.");
    }
  };

  const modifyTodoHandler = async (item: Todo) => {
    try {
      const modifiedTodo = await TodoApi.modifyTodo({
        todoId: item.id,
        isCompleted: item.isCompleted,
        todo: item.todo,
      });
      modifyTodo(modifiedTodo);
    } catch (error) {
      alert("todo수정을 실패하였습니다.");
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModifyTodoInput(event.target.value);
  };

  const handleModifyTodo = async (item: Todo) => {
    try {
      if (modifyTodoInput.trim() !== "") {
        const modifiedTodo = await TodoApi.modifyTodo({
          todoId: item.id,
          isCompleted: item.isCompleted,
          todo: modifyTodoInput,
        });
        modifyTodo(modifiedTodo);
        setIsModifyMode(null);
      }
    } catch (error) {
      alert("todo수정을 실패하였습니다.");
    }
  };

  const handleChangeModifyIsCompleted = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: Todo
  ) => {
    const { checked } = event.target;
    modifyTodoHandler({ ...item, isCompleted: checked });
  };

  const handleOnModifyMode = (item: Todo) => {
    setIsModifyMode(item);
    setModifyTodoInput(item.todo);
  };

  const handleCancelModfyMode = (item: Todo) => {
    setModifyTodoInput(item.todo);
    setIsModifyMode(null);
  };

  const handleDeleteTodo = async (item: Todo) => {
    try {
      await TodoApi.deleteTodo(item.id);
      deleteTodo(item.id);
    } catch (error) {
      alert("todo삭제를 실패하였습니다");
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return {
    todos,
    newTodo,
    newTodoInputRef,
    handleTodoFormChange,
    handleTodoFormSubmit,
    isModifyMode,
    modifyTodoInput,
    handleModifyTodo,
    handleChangeInput,
    handleChangeModifyIsCompleted,
    handleOnModifyMode,
    handleCancelModfyMode,
    handleDeleteTodo,
  };
};

export default useTodo;
