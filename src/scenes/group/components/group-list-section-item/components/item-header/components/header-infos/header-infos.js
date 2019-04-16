/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import InfosContainer from "./components/infos-container";
import InfosTitle from "./components/infos-title";
import InfosSubtitle from "./components/infos-subtitle";

const HeaderInfos = ({
  // eslint-disable-line
  groupMediaCreatorName,
  groupMediaDateCreation
}) => (
  <InfosContainer>
    <InfosTitle weight={700}>
      {/* eslint-disable-line */}
      {groupMediaCreatorName}
    </InfosTitle>
    <InfosSubtitle type="h5" /* weight={700} */>
      {/* eslint-disable-line */}
      {groupMediaDateCreation}
    </InfosSubtitle>
  </InfosContainer>
);

export default HeaderInfos;
