import React, { useState, useEffect } from "react";
import { FormData } from "../../types/form/formData.type";
import { formDataValidater } from "../../utils/validation";
import { setToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";

import AuthApi from "../../api/AuthApi";
import { AxiosError } from "axios";

const useSignIn = () => {
  const authApi = AuthApi();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(formDataValidater(formData));
  }, [formData]);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { access_token } = await authApi.signIn(formData);
      setToken("token", access_token);
      window.alert("로그인 성공");
      navigate("/todo");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMesage = error?.response?.data.message;
        window.alert(errorMesage);
      }
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [target.name]: target.value }));
  };

  return {
    isValid,
    formData,
    handleSubmit,
    handleChange,
  };
};

export default useSignIn;
