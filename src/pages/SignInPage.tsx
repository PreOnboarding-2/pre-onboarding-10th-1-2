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
        handleSubmit={e => handleSubmit(e, "SIGNIN")}
      />
      <Link to={"/signup"}>회원가입 하기</Link>
    </div>
  );
};

export default SignInPage;
