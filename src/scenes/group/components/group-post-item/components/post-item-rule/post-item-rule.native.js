import styled from "styled-components";
import Container from "../../../../../../components/container";
import { windowDimensions } from "../../../../../../configurations/window";

const PostItemRule = styled(Container)`
  align-self: center;
  width: ${windowDimensions.getWidth() - 60}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.primaryVariantColor};
  margin-bottom: 40px;
`;

export default PostItemRule;
