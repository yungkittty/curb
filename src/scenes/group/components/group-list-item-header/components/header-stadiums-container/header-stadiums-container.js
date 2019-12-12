import styled from "styled-components";
import Container from "../../../../../../components/container";
import { platformBools } from "../../../../../../configurations/platform";

const HeaderStadiumsContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-bottom: ${platformBools.isWeb ? 20 : 10}px;
`;

export default HeaderStadiumsContainer;
