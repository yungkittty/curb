import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import InfosContainer from "./components/infos-container";
import InfosTitle from "./components/infos-title";
import InfosSubtitle from "./components/infos-subtitle";
import withUser from "../../../../../../../../hocs/with-user";

const HeaderInfos = ({
  // eslint-disable-line
  mediaDateCreation,
  userName,
  t
}) => {
  const dateDelta = (() => {
    // eslint-disable-next-line
    let dateDelta = 0;
    const date = new Date();
    const dateMedia = new Date(mediaDateCreation);
    const dateApi = ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds"];
    const dateTrans = ["year", "month", "day", "hour", "minute", "second"];
    let i = -1;
    while (dateDelta === 0)
      // eslint-disable-next-line
      dateDelta = date[`get${dateApi[++i]}`]() - dateMedia[`get${dateApi[i]}`]();
    return t(`common:${dateTrans[i]}`, { count: dateDelta });
  })();
  return (
    <InfosContainer>
      <InfosTitle weight={700} userName={userName}>
        {/* eslint-disable-line */}
        {userName}
      </InfosTitle>
      <InfosSubtitle type="h5" mediaDateCreation={mediaDateCreation}>
        {/* eslint-disable-line */}
        {mediaDateCreation ? t("infosSubtitle", { when: dateDelta }) : ""}
      </InfosSubtitle>
    </InfosContainer>
  );
};

HeaderInfos.propTypes = {
  mediaDateCreation: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withUser,
  withTranslation("group")
])(HeaderInfos);
