import React, { useState, useEffect } from "react";
import { FormData } from "../../types/form/formData.type";
import { formDataValidater } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../api/AuthApi";
import { AxiosError } from "axios";

const useSignUp = () => {
  const authApi = AuthApi();
  const [userInfo, setUserInfo] = useState<FormData>({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsValid(formDataValidater(userInfo));
  }, [userInfo]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await authApi.signUp(userInfo);
      window.alert("회원가입 성공");
      navigate("/signin");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMesage = error?.response?.data.message;
        window.alert(errorMesage);
      }
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo(prev => ({ ...prev, [target.name]: target.value }));
  };

  return {
    isValid,
    userInfo,
    handleSubmit,
    handleChange,
  };
};

export default useSignUp;
