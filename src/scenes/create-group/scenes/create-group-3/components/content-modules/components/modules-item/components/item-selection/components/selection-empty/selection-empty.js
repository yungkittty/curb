import styled from "styled-components";
import Container from "../../../../../../../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../../../../../../../configurations/screen";

const SelectionEmpty = styled(Container)`
  border: 2px solid ${({ theme }) => theme.secondaryVariantColor};
  width: 18px;
  height: 18px;
  border-radius: 9px;

  ${screenWidthsMedias.medium`
    width: 22px;
    height: 22px;
    border-radius: 11px;
  `}
`;

export default SelectionEmpty;
