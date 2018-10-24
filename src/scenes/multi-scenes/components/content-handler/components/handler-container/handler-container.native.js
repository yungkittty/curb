import styled from "styled-components";
import Section from "../../../../../../components/general/section";

const HandlerContainer = styled(Section)`
  display: flex;
  flex-flow: row;
  flex: 1;
  width: ${props => props.width * props.length}px;
`;

export default HandlerContainer;
