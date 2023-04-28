import React, { useState, useEffect } from "react";
import { FormData } from "../../types/form/formData.type";
import { formDataValidater } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../api/AuthApi";
import { AxiosError } from "axios";
import { setToken } from "../../utils/token";
import { SigninResponse } from "../../types/api/auth";

const  useAuth = () => {
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


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, isSignIn: boolean) => {
  event.preventDefault();
  const submitFunction = isSignIn ? authApi.signIn : authApi.signUp;
  const successMessage = isSignIn ? "로그인 성공" : "회원가입 성공";
  const redirectPath = isSignIn ? "/todo" : "/signin";
  try {
    const access_token = await submitFunction(userInfo);
    if (isSignIn) {
      setToken("token", access_token as SigninResponse);
    }
    window.alert(successMessage);
    navigate(redirectPath);
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error?.response?.data.message;
      window.alert(errorMessage);
    }
  }
};
  

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo(prev => ({ ...prev, [target.name]: target.value }));
  };

  return {
    isValid,
    userInfo,
    handleChange,
    handleSubmit
  };
};

export default useAuth;
