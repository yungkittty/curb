import styled from "styled-components";

const InputField = styled.input`
  box-sizing: border-box;
  font-size: 18px;
  padding: 18px;
  border: 0;
  border-bottom: 1px solid ${props => (props.error ? "#eb5757" : "#c8ccd4")};
  width: 100%;
`;

export default InputField;
