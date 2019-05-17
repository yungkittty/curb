import styled from "styled-components";
import Video from "../../../../../../../../components/video";

const MediaVideo = styled(Video).attrs(() => ({ objectFit: "contain" }))`
  width: 100%;
  min-width: 100%;
`;

export default MediaVideo;
