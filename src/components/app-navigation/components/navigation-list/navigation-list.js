import styled from "styled-components";
import List from "../../../list";

const NavigationList = styled(List)`
  margin-left: -10px;
  margin-bottom: 10px;
  margin-right: -10px;
  border-color: ${props => props.theme.secondaryVariantColor}
  border-top-width: 0.5px;
  border-top-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  box-sizing: border-box;
`;

export default NavigationList;
