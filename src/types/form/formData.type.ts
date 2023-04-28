import { FormEvent, ChangeEvent } from "react";

export interface FormData {
  email: string;
  password: string;
}

export interface SignFormProps {
  value: FormData;
  title: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}
