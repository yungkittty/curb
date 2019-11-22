import styled from "styled-components";
import { withTranslation } from "react-i18next";
import Input from "../../../../../input";
import countLineNumber from "./utils/count-line-number";

const InputContainer = styled(Input).attrs(({ t }) => ({
  placeholder: t("writeSomething")
}))`
  padding: 0px;
  font-size: 14px;
  line-height: 30px;
  flex: 1;
  min-height: ${({ value = "" }) => {
    let nb = countLineNumber(value);
    if (nb < 3) nb = 3;
    return nb * 30;
  }}px;
`;

export default withTranslation("common", { withRef: true })(InputContainer);
