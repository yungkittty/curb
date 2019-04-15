import styled from "styled-components";
import Button from "../../../../../../../../../../components/button";

const OptionContainer = styled(Button)`
  padding: 0 22px;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ selected, theme }) => (selected ? theme.primaryVariantColor : "transparent")};
`;

export default OptionContainer;
