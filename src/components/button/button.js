import styled from "styled-components";

const Button = styled.button.attrs({ type: "button" })`
  display: block; // !
  padding: 0px;
  border-width: initial;
  border-style: initial;
  border-color: initial;
  outline: initial;
  background-color: initial;
  cursor: pointer;

  &::-moz-focus-inner {
    border: none;
  }
`;

export default Button;
