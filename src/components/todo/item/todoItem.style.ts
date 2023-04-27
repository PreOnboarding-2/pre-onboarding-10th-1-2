import styled from "styled-components";

const Item = styled.li<{ isCompleted: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;

  span {
    width: 80%;
    flex-shrink: 1;
    word-wrap: break-word;
    overflow: auto;
    font-size: 30px;
    ${props => props.isCompleted && "text-decoration: line-through"}
  }

  input:not([type="checkbox"]) {
    flex-shrink: 1;
    width: 80%;
    margin-right: 10px;
  }

  input[type="checkbox"] {
    zoom: 2;
    margin-top: 3px;
    margin-right: 10px;
  }

  & button:nth-of-type(1) {
    margin-left: auto;
  }
`;

export default Item;
