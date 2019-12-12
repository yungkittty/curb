import styled from "styled-components";
import Container from "../../../../../../components/container";

const PostItemRule = styled(Container)`
  align-self: center;
  width: 400px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.primaryVariantColor};
  border-bottom-style: solid;
  margin-bottom: 70px;
`;

export default PostItemRule;
