import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div>404 페이지를 찾을 수 없습니다</div>
      <Link to={"/"}>홈으로 이동하기</Link>
    </>
  );
};

export default NotFoundPage;
