import styled from "styled-components";
import Container from "../../../container";

const CardContainer = styled(Container)`
  position: relative;
  width: ${({ cardSize }) => cardSize.width + 8}px;
  padding: 0px 4px 7px 4px;
`;

export default CardContainer;
