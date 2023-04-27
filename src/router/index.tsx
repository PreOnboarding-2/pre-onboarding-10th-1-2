import { createBrowserRouter, Navigate } from "react-router-dom";
import TodoPage from "../page/TodoPage";
import NotFoundPage from "../page/404Page";
import SignInPage from "../page/SignInPage";
import SignUpPage from "../page/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/signin"} />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

export default router;
