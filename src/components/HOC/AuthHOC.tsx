import { ComponentType, useEffect } from "react";
import { TOKEN_KEY } from "../../constant/constant";
import { useNavigate } from "react-router-dom";

// true -> 로그인한 유저만 출입이 가능한 페이지
// false -> 로그인한 유저는 출입이 불가능한 페이지
const AuthHOC = (SpecificComponent: ComponentType, option: boolean) => {
  const token = localStorage.getItem(TOKEN_KEY);
  function AuthenticationCheck() {
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        if (option) navigate("/signin");
      } else {
        navigate("/todo");
      }
    }, [navigate]);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
};

export default AuthHOC;
