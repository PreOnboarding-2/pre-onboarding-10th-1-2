import styled from "styled-components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container className="App">
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export default App;
