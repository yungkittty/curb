import styled from "styled-components";
import { withTranslation } from "react-i18next";
import Input from "../../../../../input";

const InputContainer = styled(Input).attrs(({ t }) => ({ placeholder: t("writeSomething") }))`
  width: 100%;
  min-height: 90px;
  padding: 0px;
  margin: 0px;
  font-size: 14px;
`;

export default withTranslation("common", { withRef: true })(InputContainer);
