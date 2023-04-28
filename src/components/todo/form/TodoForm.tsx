import StyledForm from "./todoForm.style";
import Input from "../../common/input/Input";
import { useTodoForm } from "../../../hooks/todo/useTodoForm";
import Button from "../../common/button/Button";
import { TodoFormProps } from "../../../types/todo";

const TodoForm = (props: TodoFormProps) => {
  const { newTodo, newTodoInputRef, handleSubmit, handleChange } = useTodoForm(props);
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        value={newTodo}
        ref={newTodoInputRef}
        type={"text"}
        name="new-todo"
        data-testid="new-todo-input"
        onChange={handleChange}
      />
      <Button type="submit" data-testid="new-todo-add-button">
        추가
      </Button>
    </StyledForm>
  );
};

export default TodoForm;
