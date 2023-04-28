import React from "react";
import { InputProps } from "../../../types/input";
import { StyledInput } from "./input.style";

const Input = React.forwardRef(
  ({ ...attr }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <StyledInput ref={ref} {...attr} />;
  }
);

export default Input;
