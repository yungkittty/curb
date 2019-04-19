import styled from "styled-components";
import Container from "../../../../../../../../components/container";

const MediaContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  ${props => (props.isMediaFetching ? `background-color: ${props.theme.primaryVariantColor};` : "")};
`;

export default MediaContainer;
