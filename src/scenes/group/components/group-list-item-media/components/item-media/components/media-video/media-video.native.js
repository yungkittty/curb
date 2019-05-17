import styled from "styled-components";
import Video from "../../../../../../../../components/video";

const MediaVideo = styled(Video).attrs(() => ({ objectFit: "cover" }))`
  width: 100%;
  min-width: 100%;
  height: 250px;
`;

export default MediaVideo;
