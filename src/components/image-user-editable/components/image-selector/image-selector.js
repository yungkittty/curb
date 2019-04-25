import styled from "styled-components";
import Container from "../../../container";

const ImageSelector = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  background: ${({ theme }) => theme.primaryVariantColor};
  width: 40px;
  height: 40px;
  box-shadow: 0px 3.6px 3.24px 0px rgba(0, 0, 0, 0.189);
`;

export default ImageSelector;
