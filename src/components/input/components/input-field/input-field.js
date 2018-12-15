import styled from "styled-components";

const InputField = styled.input.attrs({
  type: props => props.type,
  placeholder: props => props.placeholder
})`
  box-sizing: border-box;
  font-size: 18px;
  padding: 18px;
  border: 0;
  border-bottom: 1px solid ${props => (props.error ? "#eb5757" : "#c8ccd4")};
  width: 100%;
`;

export default InputField;
