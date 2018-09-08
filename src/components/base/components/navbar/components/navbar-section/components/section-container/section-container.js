import styled from "styled-components";
import Section from "../../../../../../../../components/general/section";

const SectionContainer = styled(Section)`
  position: ${props => (props.fixed ? "absolute" : "relative")};
  top: ${props => (props.top ? "0" : "unset")};
  bottom: ${props => (props.bottom ? "0" : "unset")};

  padding-top: 14px;
  padding-bottom: 1px;
  width: inherit;

  &:after {
    ${props => (props.bottom ? "top" : "bottom")}: -1px;
    width: ${props => (props.fixed ? "100%" : "40px")};
    height: 1px;
    margin: auto ${props => (props.fixed ? "none" : "20px")};
    content: "";
    position: absolute;
    left: 0;
    border-top: 1px solid #bdbdbd;
  }
`;

export default SectionContainer;
