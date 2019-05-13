import styled from "styled-components";
import ListHeaderCircleText from "../../../../../../../../components/list-header-circle-text";
import { windowQueries } from "../../../../../../../../configurations/window";

const ListTitle = styled(ListHeaderCircleText)`
  margin-left: 80px;
  ${windowQueries.large`
    margin-left: 0px;
  `}
`;

export default ListTitle;
