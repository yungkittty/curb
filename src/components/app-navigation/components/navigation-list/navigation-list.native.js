import styled from "styled-components";
import List from "../../../list";

const NavigationList = styled(List)`
  margin-left: -10px;
  margin-bottom: 10px;
  margin-right: -10px;
  border-style: solid;
  border-color: ${props => props.theme.secondaryVariantColor}
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
`;

export default NavigationList;
