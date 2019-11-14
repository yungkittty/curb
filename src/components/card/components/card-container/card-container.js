import styled from "styled-components";
import Container from "../../../container";

const CardContainer = styled(Container)`
  position: relative;
  width: ${({ cardSize }) => cardSize.width}px;
`;

export default CardContainer;
