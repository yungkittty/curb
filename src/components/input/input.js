import styled from "styled-components";

const Input = styled.input.attrs({
  type: props => props.type,
  placeholder: props => props.placeholder
})`
  box-sizing: border-box;
  font-size: 18px;
  padding: 18px;
  border: 0;
  border-bottom: 1px solid #c8ccd4;
  ${props => (props.s ? "width: 380px" : null)};
`;

export default Input;
