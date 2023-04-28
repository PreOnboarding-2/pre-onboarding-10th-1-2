import AuthHOC from "../components/HOC/AuthHOC";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import TodoPage from "./TodoPage";

export { default as NotFoundPage } from "./404Page";
export const AuthSignInPage = AuthHOC(SignInPage, false);
export const AuthSignUpPage = AuthHOC(SignUpPage, false);
export const AuthTodoPage = AuthHOC(TodoPage, true);
