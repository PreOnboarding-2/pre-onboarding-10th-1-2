import customAxios from "../lib/customAxios";
import { SigninResponse, SigninParam, SignupParam } from "./types/auth/index";
import CONSTANT from "../constant/constant.json";

const { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_ERROR, SIGNIN_SUCCESS } = CONSTANT;

const AuthApi = () => {
  const signIn = async (formData: SigninParam): Promise<SigninResponse> => {
    const result = await customAxios.post("/auth/signin", formData);
    if (result.status === 201) {
      alert(SIGNIN_SUCCESS);
      return result.data;
    } else {
      alert(SIGNIN_ERROR);
    }
  }

  const signUp = async (formData: SignupParam): Promise<void> => {
    const result = await customAxios.post("/auth/signup", formData);
    if (result.status === 200) {
      alert(SIGNUP_SUCCESS);
      return result.data;
    } else {
      alert(SIGNUP_ERROR);
    }
  }

  return { signUp, signIn };
}

export default AuthApi;