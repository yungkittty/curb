import styled from "styled-components";
import ButtonIcon from "../../../../../../components/button-icon";

const HeaderButtonIcon = styled(ButtonIcon).attrs(props => ({
  icon: "qrcode",
  size: "medium",
  color: props.theme.primaryColor
}))`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export default HeaderButtonIcon;
