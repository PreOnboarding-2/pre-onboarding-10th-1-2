import customAxios from "../lib/customAxios";
import { SigninResponse, SigninParam, SignupParam } from "../types/api/auth";

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
