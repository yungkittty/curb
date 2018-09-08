import styled from "styled-components";
import Section from "../../../../components/general/section";

const PopupContainer = styled(Section)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10; // Render over everthing else
`;

export default PopupContainer;
