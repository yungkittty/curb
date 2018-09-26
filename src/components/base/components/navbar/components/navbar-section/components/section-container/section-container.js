import styled from "styled-components";
import Section from "../../../../../../../../components/general/section";

const SectionContainer = styled(Section)`
  position: ${props => (props.fixed ? "absolute" : "relative")};
  ${props => (props.top ? "top" : "bottom")}: 0;

  padding-top: 14px;
  padding-bottom: 1px;
  
  width: 80px;

  border-${props => (props.top ? "bottom" : "top")} 1px solid #bdbdbd;
  border${props => (props.top ? "Bottom" : "Top")}Width: 1px;
  border${props => (props.top ? "Bottom" : "Top")}Color: #bdbdbd;
`;

export default SectionContainer;
