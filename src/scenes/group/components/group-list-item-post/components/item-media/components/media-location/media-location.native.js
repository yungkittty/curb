import styled from "styled-components";
import Map from "../../../../../../../../components/map";
import { windowDimensions } from "../../../../../../../../configurations/window";

const MediaLocation = styled(Map)`
  width: ${windowDimensions.getWidth() - 80}px;
  height: 350px;
  border-radius: 15px;
`;

export default MediaLocation;
