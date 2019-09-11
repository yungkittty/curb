import _ from "lodash";
import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import MediaListContainer from "./components/media-list-container";
import MediaListIcon from "./components/media-list-icon";
import Button from "../../../../../button";
import mediaTypeToIcon from "../../../../../../utils/media-type-to-icon";

const ContentMediaList = ({ theme, mediaList, selectedIndex, onClick }) => {
  return (
    <MediaListContainer>
      {_.map(mediaList, (item, mediaType) => (
        <Button
          key={mediaType}
          component={MediaListIcon}
          icon={mediaTypeToIcon(mediaType)}
          size="extra-extra-small"
          color={
            selectedIndex === _.indexOf(_.keys(mediaList), mediaType) ? "#ffffff" : theme.fontVariantColor
          }
          onClick={() => onClick(_.indexOf(_.keys(mediaList), mediaType))}
        />
      ))}
    </MediaListContainer>
  );
};

ContentMediaList.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  mediaList: PropTypes.object, // eslint-disable-line
  selectedIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withTheme(ContentMediaList);
