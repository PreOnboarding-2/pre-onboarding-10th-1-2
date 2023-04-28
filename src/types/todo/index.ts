export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoListProps {
  todos: Todo[];
  modifyTodo: (item: Todo) => void;
  deleteTodo: (id: number) => void;
}

export interface TodoItemProps {
  item: Todo;
  modifyTodo: (item: Todo) => void;
  deleteTodo: (id: number) => void;
}

export interface TodoFormProps {
  createTodo: (item: Todo) => void;
}

export interface useTodoFormProps {
  createTodo: (newTodo: Todo) => void;
}

export type useTodoItemProps = {
  item: Todo;
  modifyTodo: (modifiedTodo: Todo) => void;
  deleteTodo: (id: number) => void;
};
