import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  button {
    margin: 0 0 0 40px;
    width: 100px !important;
  }

  input {
    flex-shrink: 1;
    width: 80%;
    max-width: 320px;
    margin: 0;
  }
`;

export default StyledForm;
