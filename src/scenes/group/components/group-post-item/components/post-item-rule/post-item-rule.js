import styled from "styled-components";
import Container from "../../../../../../components/container";

const PostItemRule = styled(Container)`
  align-self: center;
  width: 400px;
  border: 1px solid ${({ theme }) => theme.primaryVariantColor};
`;

export default PostItemRule;
