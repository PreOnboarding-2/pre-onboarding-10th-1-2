import React from "react";
import { Link } from "react-router-dom";
import SignForm from "../components/common/form/SignForm";
import useAuth from "../hooks/auth/useAuth";

const SignInPage = () => {
  const { isValid, userInfo, handleSubmit, handleChange } = useAuth();
  return (
    <div>
      <SignForm
        value={userInfo}
        isValid={isValid}
        title={"로그인"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Link to={"/signin"}>로그인 하러 가기</Link>
    </div>
  );
};

export default SignInPage;
