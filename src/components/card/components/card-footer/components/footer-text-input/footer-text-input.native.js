import styled from "styled-components";
import { withTranslation } from "react-i18next";
import Input from "../../../../../input";

const InputContainer = styled(Input).attrs(({ t }) => ({ placeholder: t("writeSomething") }))`
  padding: 0px;
  font-size: 12px;
  flex: 1;
`;

export default withTranslation("common", { withRef: true })(InputContainer);
