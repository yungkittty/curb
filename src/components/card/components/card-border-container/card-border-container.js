import styled from "styled-components";
import Container from "../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const CardBorderContainer = styled(Container)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  flex: 1;
  background-color: white;
  box-shadow: 0px 2.4px 2.16px 0px rgba(0, 0, 0, 0.186);
`;

export default CardBorderContainer;
