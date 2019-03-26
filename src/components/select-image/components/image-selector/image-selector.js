import styled from "styled-components";
import Container from "../../../container";

const ImageSelector = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  border-radius: 25px;
  background: ${({ theme }) => theme.primaryVariantColor};
  width: 50px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 6px -2px;
`;

export default ImageSelector;
