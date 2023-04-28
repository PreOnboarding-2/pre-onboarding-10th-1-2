import React, { InputHTMLAttributes } from "react";

interface CommonComponentProps {
  children?: React.ReactNode;
  customStyle?: React.CSSProperties;
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<CommonComponentProps, "children"> {}
