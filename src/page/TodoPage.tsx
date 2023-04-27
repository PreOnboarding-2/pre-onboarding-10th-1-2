import React from "react";
import AuthHOC from "../components/HOC/AuthHOC";

const TodoPage = () => {
  return <div>TodoPage</div>;
};

export default AuthHOC(TodoPage, true);
