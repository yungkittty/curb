import styled from "styled-components";
import Section from "../../../../../../../general/section";

const ContentContainer = styled(Section)`
  height: calc(100% - (75px * ${props => props.size}));
  overflow-y: scroll;
  border: 1px solid red;

  &::-webkit-scrollbar {
    display: none;
  }

  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default ContentContainer;
