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
    position: absolute;
    ${props => (props.bottom ? "top" : "bottom")}: -1px;
    width: ${props => (props.fixed ? "100%" : "40px")};
    height: 1px;
    margin-left: 50%;
    transform: translateX(-50%);
    content: "";
    border-top: 1px solid #bdbdbd;
  }
`;

export default SectionContainer;
