import styled from "styled-components";
import ButtonIcon from "../../../../../../components/button-icon";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ListButtonIcon = styled(ButtonIcon).attrs(props => ({
  size: "small",
  color: props.theme.secondaryVariantColor
}))`
  position: absolute;
  top: 30px;
  zIndex: 4;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 2.4px 2.16px 0px rgba(0, 0, 0, 0.186); // 4
  background-color: ${props => props.theme.primaryColor};
`;

export default ListButtonIcon;
