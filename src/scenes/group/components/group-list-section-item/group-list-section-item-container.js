/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GroupListSectionItem from "./group-list-section-item";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

class GroupListSectionItemContainer extends React.Component {
  componentDidMount() {
    const { groupMediaId, getMedia } = this.props;
    getMedia({ id: groupMediaId });
  }

  render() {
    const { getMedia, ...others } = this.props;
    return <GroupListSectionItem {...others} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    isFetching: isGroupMediaFetching = true,
    id: groupMediaId = ownProps.groupMediaId || "",
    creatorId: groupMediaCreatorId = "",
    type: groupMediaType = "", // {Unique}
    dateCreation: groupMediaDateCreation = undefined, // {Date},
    data: groupMediaData = undefined
  } = mediasSelectors.getMediaById(state, ownProps.groupMediaId) || {};
  return {
    isGroupMediaFetching,
    groupMediaId,
    groupMediaCreatorId,
    groupMediaType,
    groupMediaDateCreation,
    groupMediaData
  };
};

const mapDispatchToProps = dispatch => ({
  getMedia: payload => dispatch(mediasActions.getMediaRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupListSectionItemContainer);
