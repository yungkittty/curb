import styled from "styled-components";
import Button from "../../../../../../components/button";
import Icon from "../../../../../../components/icon";

const HeaderButtonIcon = styled(Button).attrs(() => ({ component: Icon }))`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default HeaderButtonIcon;
