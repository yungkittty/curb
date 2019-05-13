import styled from "styled-components";
import Input from "../../../../../../components/input";

const TextInput = styled(Input)`
    multiline: true;
    numberOfLine
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
