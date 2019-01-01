import styled from "styled-components";
import Container from "../../../../../../../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../../../../../../../configurations/screen";

const IconContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  ${screenWidthsMedias.medium`
    width: 125px;
    height: 125px;
  `}
`;

export default IconContainer;
