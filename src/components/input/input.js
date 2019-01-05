import styled from "styled-components";

const Input = styled.input.attrs({
  type: props => (props.password ? "password" : null),
  placeholder: props => props.placeholder
})`
  box-sizing: border-box;
  font-size: 18px;
  padding: 18px;
  border: 0;
  border-bottom: 1px solid #c8ccd4;
  display: inline-block;
  width: ${({ s, b }) => (s ? "380" : b ? "420" : null)}px;
`;
export default Input;
