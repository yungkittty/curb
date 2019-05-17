import styled from "styled-components";
import Container from "../../../../../../../../components/container";

const MediaContainer = styled(Container)`
  display: flex;
  width: 100%;
  min-width: 100%;
  ${props => (!props.mediaData ? "height: 250px;" : "")}
  border-radius: 15px;
  overflow: hidden;
`;

export default MediaContainer;
