import React from "react";
import { Link } from "react-router-dom";
import SignForm from "../components/common/form/SignForm";
import useSignUp from "../hooks/auth/useSignUp";

const SignUpPage = () => {
  const { userInfo, handleSubmit, handleChange, isValid } = useSignUp();
  return (
    <div>
      <SignForm
        isValid={isValid}
        value={userInfo}
        title="회원가입"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Link to={"/signin"}>로그인 하기</Link>
    </div>
  );
};

export default SignUpPage;
