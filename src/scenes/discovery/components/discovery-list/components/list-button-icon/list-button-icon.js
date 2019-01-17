import styled from "styled-components";
import ButtonIcon from "../../../../../../components/button-icon";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ListButtonIcon = styled(ButtonIcon).attrs(props => ({
  size: "small",
  color: props.theme.secondaryVariantColor
}))`
  position: absolute;
  top: 30px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 3.6px 3.24px 0px rgba(0, 0, 0, 0.189); // 6
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.primaryVariantColor : theme.primaryColor};
`;

export default ListButtonIcon;
