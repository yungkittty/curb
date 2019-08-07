import React from "react";
import styled from "styled-components";
import ListCircleText from "../../../../../../../../components/list-circle-text";
import { windowQueries } from "../../../../../../../../configurations/window";

const ListList = styled(({ className, ...others }) => (
  <ListCircleText
    // eslint-disable-line
    {...others}
    contentContainerClassName={className}
  />
))`
  padding-left: 80px;
  ${windowQueries.large`
    padding-left: 0px;
  `}
`;

export default ListList;
