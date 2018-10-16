import styled from "styled-components";
import Section from "../../../../../../../../../../../../../general/section";

const DotContainer = styled(Section)`
  background: ${props => (props.enabled ? "#e0e0e0" : "#828282")};
  height: 10px;
  width: 10px;
  margin: 0 9px;
  border-radius: 5px;
`;

export default DotContainer;
