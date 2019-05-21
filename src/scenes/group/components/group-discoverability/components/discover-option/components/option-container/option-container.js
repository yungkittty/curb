import styled from "styled-components";
import Button from "../../../../../../../../components/button";

const OptionContainer = styled(Button)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 22px;
  background: ${({ selected, theme }) => (selected ? theme.primaryVariantColor : "transparent")};
`;

export default OptionContainer;
