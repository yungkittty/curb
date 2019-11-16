import styled from "styled-components";
import Container from "../../../../../../components/container";
import { windowDimensions } from "../../../../../../configurations/window";

const PostItemRule = styled(Container)`
  align-self: center;
  width: ${windowDimensions.getWidth() - 20}px;
  border: 1px solid ${({ theme }) => theme.primaryVariantColor};
`;

export default PostItemRule;
