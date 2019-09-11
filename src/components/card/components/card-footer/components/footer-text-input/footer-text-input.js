import styled from "styled-components";
import Input from "../../../../../input";
import countLineNumber from "./utils/count-line-number";

const InputContainer = styled(Input).attrs(() => ({
  placeholder: "Écrivez quelque chose"
}))`
  padding: 0px;
  font-size: 14px;
  line-height: 28px;
  flex: 1;
  min-height: ${({ value = "" }) => {
    let nb = countLineNumber(value);
    if (nb < 3) nb = 3;
    return nb * 28;
  }}px;
`;

export default InputContainer;
