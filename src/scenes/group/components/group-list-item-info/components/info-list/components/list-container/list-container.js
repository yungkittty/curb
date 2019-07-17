import styled from "styled-components";
import Container from "../../../../../../../../components/container";
import { windowQueries } from "../../../../../../../../configurations/window";

const ListContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${windowQueries.large`
    width: 50%;
  `}
`;

export default ListContainer;
