import React, { useEffect, useRef, useState } from "react";
import TodoApi from "../../api/TodoApi";
import { useTodoFormProps } from "../../types/todo";

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
      if (newTodo.length > 255) {
        // eslint-disable-next-line no-throw-literal
        throw "Content too long";
      }
      if (newTodo.trim() !== "") {
        const data = await TodoApi.createTodo(newTodo);
        createTodo(data);
      }
      setNewTodo("");
    } catch (error) {
      alert("todo 추가를 실패하였습니다." + error);
    }
  };

  return {
    newTodo,
    newTodoInputRef,
    handleChange,
    handleSubmit,
  };
};
