import _ from "lodash";
import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import MediaListContainer from "./components/media-list-container";
import MediaListIcon from "./components/media-list-icon";
import Button from "../../../../../button";
import mediaTypeToIcon from "../../../../../../utils/media-type-to-icon";
import { platformBools } from "../../../../../../configurations/platform";

const ContentMediaList = ({ theme, mediaList, selectedIndex, onClick }) => (
  <MediaListContainer>
    {_.map(mediaList, (item, mediaType) => (
      <Button
        key={mediaType}
        component={MediaListIcon}
        icon={mediaTypeToIcon(mediaType)}
        size="extra-extra-small"
        color={selectedIndex === _.indexOf(_.keys(mediaList), mediaType) ? "white" : theme.secondaryColor}
        onClick={() => onClick(_.indexOf(_.keys(mediaList), mediaType))}
        disabled={platformBools.isNative}
      />
    ))}
  </MediaListContainer>
);

ContentMediaList.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  mediaList: PropTypes.object, // eslint-disable-line
  selectedIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withTheme(ContentMediaList);
