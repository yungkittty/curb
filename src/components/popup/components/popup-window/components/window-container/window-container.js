import styled from "styled-components";
import Section from "../../../../../../components/general/section";

const WindowContainer = styled(Section)`
  display: flex;
  flex-flow: column;
  background: white;
  overflow: hidden;
  width: 700px;
  height: 740px;
  border-radius: 25px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default WindowContainer;
