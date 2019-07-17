import styled from "styled-components";
import Container from "../../../../../../components/container";
import { windowQueries } from "../../../../../../configurations/window";

const InfoContainer = styled(Container)`
  display: flex;
  flex: 1;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  min-width: 100%;

  ${windowQueries.large`
    flex-direction: row;
    padding: 0px 80px;
  `}
`;

export default InfoContainer;
