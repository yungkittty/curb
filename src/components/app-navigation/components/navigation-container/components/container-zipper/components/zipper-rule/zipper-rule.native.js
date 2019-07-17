import styled from "styled-components";
import Container from "../../../../../../../container";

const ZipperRule = styled(Container)`
  width: 10px;
  height: 2.5px;
  border-radius: 1px;
  background-color: ${props => props.theme.secondaryVariantColor};
`;

export default ZipperRule;
