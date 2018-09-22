import styled from "styled-components";
import Section from "../../../../../../../../../../../../../general/section";

const DotContainer = styled(Section)`
  background: ${props => (props.enabled ? "#e0e0e0" : "#828282")};
  height: 12px;
  width: 12px;
  margin: 0 9px;
  border-radius: 10px;
  display: inline-block;
`;

export default DotContainer;
