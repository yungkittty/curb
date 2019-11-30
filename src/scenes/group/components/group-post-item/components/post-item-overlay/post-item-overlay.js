import styled from "styled-components";
import Loader from "../../../../../../components/loader";

const PostItemOverlay = styled(Loader)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
`;

export default PostItemOverlay;
