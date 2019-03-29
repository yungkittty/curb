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
  box-shadow: 0px 2.4px 2.16px 0px rgba(0, 0, 0, 0.186);
`;

export default ImageSelector;
