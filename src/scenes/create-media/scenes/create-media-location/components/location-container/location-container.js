import styled from "styled-components";
import Map from "../media-map/components/map";

const LocationContainer = styled(Map)`
  width: 100%;
  height: calc(((700px - 80px) * 9) / 16);
  padding: 0px 40px;
  border-radius: 15px;
  overflow: hidden;
`;

export default LocationContainer;
