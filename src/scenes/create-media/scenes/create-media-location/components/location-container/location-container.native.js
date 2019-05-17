import styled from "styled-components";
import { windowDimensions } from "../../../../../../configurations/window";
import Map from "../media-map/components/map";

const LocationContainer = styled(Map)`
  width: 100%;
  height: ${((windowDimensions.width - 50) * 9) / 16}px;
  margin: 0px 25px;
  border-radius: 15px;
  overflow: hidden;
`;

export default LocationContainer;
