import styled from "styled-components";
import Section from "../../../../../../../../components/general/section";
import { screenWidthsMedias } from "../../../../../../../../configurations/screen";

const SectionContainer = styled(Section)`
  position: ${props => (props.fixed ? "absolute" : "relative")};
  ${props => (props.top ? "top" : "bottom")}: 0;

  padding-top: 14px;

  width: 76px;

  border-${props => (props.top ? "bottom" : "top")} 1px solid #bdbdbd;
  border${props => (props.top ? "Bottom" : "Top")}Width: 1px;
  border${props => (props.top ? "Bottom" : "Top")}Color: #bdbdbd;

  ${screenWidthsMedias.large`
    width: 80px;
  `}
`;

export default SectionContainer;
