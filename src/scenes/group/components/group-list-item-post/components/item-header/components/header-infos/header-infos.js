import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import InfosContainer from "./components/infos-container";
import InfosTitlePlaceholder from "./components/infos-title-placeholder";
import InfosTitle from "./components/infos-title";
import InfosSubtitlePlaceholder from "./components/infos-subtitle-placeholder";
import InfosSubtitle from "./components/infos-subtitle";

const HeaderInfos = ({
  // eslint-disable-line
  userName,
  mediaDateCreation,
  t
}) => {
  const dateDelta = (() => {
    // eslint-disable-next-line
    let dateDelta = 0;
    const date = new Date();
    const dateMedia = new Date(mediaDateCreation);
    const dateApi = ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds"];
    const dateTrans = ["year", "month", "day", "hour", "minute", "second"];
    let i = 0;
    while (i < 6) {
      const dateCurrentApi = `get${dateApi[i]}`;
      dateDelta = date[dateCurrentApi]() - dateMedia[dateCurrentApi]();
      if (dateDelta !== 0) break;
      i += 1;
    }
    return t(`common:${dateTrans[i]}`, { count: dateDelta });
  })();
  return (
    <InfosContainer>
      {!userName ? (
        <InfosTitlePlaceholder />
      ) : (
        <InfosTitle weight={700}>
          {/* eslint-disable-line */}
          {userName}
        </InfosTitle>
      )}
      {!mediaDateCreation ? (
        <InfosSubtitlePlaceholder />
      ) : (
        <InfosSubtitle type="h5">
          {/* eslint-disable-line */}
          {t("infosSubtitle", { when: dateDelta })}
        </InfosSubtitle>
      )}
    </InfosContainer>
  );
};

HeaderInfos.propTypes = {
  userName: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation("group")(HeaderInfos);
