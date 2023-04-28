import React, { useEffect, useRef, useState } from "react";
import TodoApi from "../../api/TodoApi";
import { Todo } from "../../types/todo";

interface useTodoFormProps {
  createTodo: (newTodo: Todo) => void;
}

export const useTodoForm = ({ createTodo }: useTodoFormProps) => {
  const [newTodo, setNewTodo] = useState("");

  const newTodoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    newTodoInputRef.current?.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

  return {
    newTodo,
    newTodoInputRef,
    handleChange,
    handleSubmit,
  };
};
