import { ButtonProps } from "../../../types/button";
import StyledButton from "./button.style";

const Button = ({ children, ...atr }: ButtonProps) => {
  return <StyledButton {...atr}>{children}</StyledButton>;
};

export default Button;
