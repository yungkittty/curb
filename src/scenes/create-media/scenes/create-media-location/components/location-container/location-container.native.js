import styled from "styled-components";
import Container from "../../../../../../components/container";
import { windowDimensions } from "../../../../../../configurations/window";

const LocationContainer = styled(Container)`
  width: 100%;
  height: ${((windowDimensions.width - 50) * 9) / 16}px;
  padding: 0px 25px;
`;

export default LocationContainer;
