import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import InfosContainer from "./components/infos-container";
import InfosTitlePlaceholder from "./components/infos-title-placeholder";
import InfosTitle from "./components/infos-title";
import InfosSubtitlePlaceholder from "./components/infos-subtitle-placeholder";
import InfosSubtitle from "./components/infos-subtitle";
import Button from "../../../../../../../button";

const OriginInfos = ({
  // eslint-disable-line
  t,
  theme,
  userId,
  infosTitle,
  mediaDateCreation,
  isPost
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
      {!infosTitle ? (
        <InfosTitlePlaceholder />
      ) : (
        <Button
          // eslint-disable-line
          style={{ justifyContent: "initial" }}
          contentStyle={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
          onClick={`/users/${userId}`}
          component={InfosTitle}
          shouldFetch={false}
          userId={userId}
          size="extra-small"
          placeholderColor={theme.primaryVariantColor}
          type="h5"
          weight={700}
        >
          {infosTitle}
        </Button>
      )}
      {/* eslint-disable-next-line */}
      {!isPost &&
        (!mediaDateCreation ? (
          <InfosSubtitlePlaceholder />
        ) : (
          <InfosSubtitle type="h5">
            {/* eslint-disable-line */}
            {t("infosSubtitle", { when: dateDelta })}
          </InfosSubtitle>
        ))}
    </InfosContainer>
  );
};

OriginInfos.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  userId: PropTypes.string.isRequired,
  infosTitle: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  isPost: PropTypes.bool.isRequired
};

export default withTranslation("group")(OriginInfos);
