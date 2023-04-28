import customAxios from "../lib/customAxios";
import { SigninResponse, SigninParam, SignupParam } from "../types/api/auth";
import CONSTANT from "../constant/constant.json";

const { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_ERROR, SIGNIN_SUCCESS } = CONSTANT;

const AuthApi = () => {
  const signIn = async (formData: SigninParam): Promise<SigninResponse> => {
    const result = await customAxios.post("/auth/signin", formData);
    return result.data;
  };

  const signUp = async (formData: SignupParam): Promise<void> => {
    const result = await customAxios.post("/auth/signup", formData);
    return result.data;
  };

  return { signUp, signIn };
};

export default AuthApi();
