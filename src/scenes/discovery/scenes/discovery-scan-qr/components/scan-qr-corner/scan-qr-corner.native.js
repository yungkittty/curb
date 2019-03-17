import styled from "styled-components";
import Container from "../../../../../../components/container";

const ScanQrCorner = styled(Container)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: ${props => props.theme.primaryColor};
`;

export default ScanQrCorner;
