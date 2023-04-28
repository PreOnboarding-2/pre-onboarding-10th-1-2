import React, { ButtonHTMLAttributes } from "react";

interface CommonComponentProps {
  children?: React.ReactNode;
  customStyle?: React.CSSProperties;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CommonComponentProps {}
