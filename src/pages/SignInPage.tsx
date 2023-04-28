import React from "react";
import { Link } from "react-router-dom";
import SignForm from "../components/common/form/SignForm";
import useSignIn from "../hooks/auth/useSignIn";

const SignInPage = () => {
  const { isValid, formData, handleSubmit, handleChange } = useSignIn();
  return (
    <div>
      <SignForm
        value={formData}
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
