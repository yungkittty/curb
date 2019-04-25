import styled from "styled-components";
import Button from "../../../../../../components/button";
import Icon from "../../../../../../components/icon";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const ListButtonIcon = styled(Button).attrs(props => ({
  component: Icon,
  size: "extra-small",
  color: props.theme.secondaryVariantColor
}))`
  position: absolute;
  top: 30px;
  z-index: 4;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 2.4px 2.16px 0px rgba(0, 0, 0, 0.186);
  background-color: ${props => props.theme.primaryColor};
`;

export default ListButtonIcon;
