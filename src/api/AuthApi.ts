// write your code.
import customAxios from "../lib/customAxios";
import CONSTANT from "../constant/constant.json";

const { SIGNUP_SUCESS, SIGNUP_ERROR, SIGNIN_ERROR, SIGNIN_SUCCESS } = CONSTANT;

const AuthApi = () => {
  const signUp = async (formData) => {
    try {
      const result = await customAxios.post("/auth/signin", formData);
      if (result.status === 201) {
        alert(SIGNUP_SUCESS);
      } else {
        alert(SIGNUP_ERROR);
      }
    } catch (error) {
      error
    }
  }

  const signIn = async (formData) => {
    try {
      const result = await customAxios.post("/auth/signup", formData);
      if (result.status === 200) {
        alert(SIGNIN_SUCCESS);
      } else {
        alert(SIGNIN_ERROR);
      }
    } catch (error) {
      error
    }
  }

  return { signUp, signIn };
}

export default AuthApi;