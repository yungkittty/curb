import React from "react";
import PropTypes from "prop-types";
import GroupCardContainer from "../group-card-container";
import withPost from "../../../../hocs/with-post";

const GroupListItemMedia = ({
  // eslint-disable-line
  postCreatorId,
  ...others
}) => {
  console.log(others);
  return <GroupCardContainer {...others} userId={postCreatorId} />;
};

GroupListItemMedia.propTypes = {
  postCreatorId: PropTypes.string.isRequired
};

export default withPost(GroupListItemMedia);
