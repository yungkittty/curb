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
  witdh: 380px;
`;
export default Input;
