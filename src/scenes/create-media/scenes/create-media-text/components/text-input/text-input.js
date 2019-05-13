import styled from "styled-components";
import InputArea from "../../../../../../components/input-area";

const TextInput = styled(InputArea)`
    border: none;
    overflow: auto;
    outline: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin-top: 20%;
    width: 90%;
    height: 50%;
    border-top: none;
    border-bottom-width: 1px;
    maxLenght: 40;
    border-bottom-color: ${({ theme, error }) =>
      error ? theme.errorColor : theme.primaryColor};
`;

export default TextInput;
