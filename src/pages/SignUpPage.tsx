import React from "react";
import { Link } from "react-router-dom";
import SignForm from "../components/common/form/SignForm";
import useAuth from "../hooks/auth/useAuth";

const SignUpPage = () => {
  const { userInfo, handleSubmit, handleChange, isValid } = useAuth();

  return (
    <div>
      <SignForm
        isValid={isValid}
        value={userInfo}
        title="회원가입"
        handleSubmit={e => handleSubmit(e, "SIGNUP")}
        handleChange={handleChange}
      />
      <Link to={"/signin"}>로그인 하기</Link>
    </div>
  );
};

export default SignUpPage;
