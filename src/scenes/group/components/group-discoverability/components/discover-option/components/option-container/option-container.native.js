import styled from "styled-components";
import Button from "../../../../../../../../components/button";

const OptionContainer = styled(Button)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px 30px;
  background: ${({ selected, theme }) => (selected ? theme.primaryVariantColor : "transparent")};
`;

export default OptionContainer;
