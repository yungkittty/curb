import styled from "styled-components";
import Section from "../../../../../../../general/section";

const ContentContainer = styled(Section)`
  height: calc(100% - (75px * ${props => props.size}));
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ContentContainer;
