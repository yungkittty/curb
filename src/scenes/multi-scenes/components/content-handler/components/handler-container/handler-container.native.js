import styled from "styled-components";
import Container from "../../../../../../components/container";

const HandlerContainer = styled(Container)`
  display: flex;
  flex-flow: row;
  flex: 1;
  width: ${props => props.width * props.length}px;
`;

export default HandlerContainer;
