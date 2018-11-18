import styled from "styled-components";
import Container from "../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const HandlerContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-flow: row;
  flex: 1;
  width: calc(100% * ${props => props.length});
  transform: translateX(
    calc(-100% / ${props => props.length} * ${props => props.state})
  );
  transition: transform 0.35s ease-in-out;

  ${screenWidthsMedias.large`
    width: ${props => 700 * props.length};
  `};
`;

export default HandlerContainer;
