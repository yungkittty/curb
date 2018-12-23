import styled from "styled-components";
import Button from "../../../../../../../../../../components/button";

const OptionContainer = styled(Button)`
  padding: 0 22px;
  flex: 1;

  background: ${({ selected, theme }) =>
    selected ? theme.pimaryVariantColor : "red"};

  &:hover {
    background: ${({ theme }) => theme.pimaryVariantColor};
  }
`;

export default OptionContainer;
