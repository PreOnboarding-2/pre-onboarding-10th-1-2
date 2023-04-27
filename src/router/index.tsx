import { createBrowserRouter, Navigate } from "react-router-dom";
import { NotFoundPage, AuthTodoPage, AuthSignInPage, AuthSignUpPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/signin"} />,
  },
  {
    path: "/signin",
    element: <AuthSignInPage />,
  },
  {
    path: "/signUp",
    element: <AuthSignUpPage />,
  },
  {
    path: "/todo",
    element: <AuthTodoPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

export default router;
