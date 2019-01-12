import styled from "styled-components";
import Link from "../../../link";

const NavigationLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  min-height: 60px;
  margin-bottom: 10px;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${props => props.theme.secondaryVariantColor};
`;

export default NavigationLink;
