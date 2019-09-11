import styled from "styled-components";
import Container from "../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 8

const CardContainer = styled(Container)`
  height: max-content;
  width: ${({ cardSize }) => cardSize.width}px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4.8px 4.32px 0px rgba(0, 0, 0, 0.192);
`;

export default CardContainer;
