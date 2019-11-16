import React from "react";
import PropTypes from "prop-types";
import GroupCardContainer from "../group-card-container";
import withMedia from "../../../../hocs/with-media";

const GroupListItemMedia = ({
  // eslint-disable-line
  mediaCreatorId,
  mediaDateCreation,
  mediaType,
  mediaData
}) => <GroupCardContainer userId={mediaCreatorId} />;

GroupListItemMedia.propTypes = {
  mediaCreatorId: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  mediaData: PropTypes.string.isRequired
};

export default withMedia(GroupListItemMedia);
