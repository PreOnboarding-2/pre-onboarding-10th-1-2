import { SignFormProps } from "../../../types/form/formData.type";
import Input from "../input/Input";
import { Container } from "./signForm.style";
import { useForm } from "../../../hooks/form/useForm";
import Button from "../button/Button";

const SignForm = ({ value, title, handleSubmit, handleChange, isValid }: SignFormProps) => {
  const signButtonTestId: { [key: string]: string } = {
    로그인: "signin-button",
    회원가입: "signup-button",
  };
  const { emailRef } = useForm();
  return (
    <Container>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          ref={emailRef}
          value={value.email}
          type="text"
          name="email"
          placeholder="test@gmail.com"
          data-testid="email-input"
          onChange={handleChange}
        />
        <Input
          value={value.password}
          type="password"
          name="password"
          placeholder="**********"
          data-testid="password-input"
          onChange={handleChange}
        />
        <Button type="submit" data-testid={signButtonTestId[title]} disabled={!isValid}>
          {title}
        </Button>
      </form>
    </Container>
  );
};

export default SignForm;
