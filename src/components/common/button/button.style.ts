import styled from "styled-components";

const StyledButton = styled.button`
  margin: 5px;
  padding: 5px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  color: #fff;
  background-color: #6a24fe;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &[type="submit"] {
    width: 100%;
    height: 48px;
    font-size: 16px;
  }

  :disabled {
    cursor: not-allowed;
    background-color: grey;
  }

  :hover:not(:disabled) {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.25);
  }
`;

export default StyledButton;
