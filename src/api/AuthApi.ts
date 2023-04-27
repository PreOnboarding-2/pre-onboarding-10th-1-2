// write your code.
import customAxios from "../lib/customAxios";
import constant from "../constant/constant.json";

const AuthApi = () => {

  const signUp = async (formData) => {
    try {
      const result = await customAxios.post("/auth/signin", formData);
      if (result.status === 201) {
        alert(constant.SIGNUP_SUCESS);
      } else {
        alert(constant.SIGNUP_ERROR);
      }
    } catch (error) {
      error
    }
  }

  const signIn = async (formData) => {
    try {
      const result = await customAxios.post("/auth/signup", formData);
      if (result.status === 200) {
        alert(constant.SIGNIN_SUCCESS);
      } else {
        alert(constant.SIGNIN_ERROR);
      }
    } catch (error) {
      error
    }
  }

  return { signUp, signIn };
}

export default AuthApi;