import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mediasActions, mediasSelectors } from "../../datas/medias";

const withMedia = WrappedComponent => {
  class WithMedia extends React.Component {
    componentDidMount() {
      const { mediaId, getMedia } = this.props;
      if (mediaId) {
        getMedia({ id: mediaId });
      }
    }

    componentDidUpdate(prevProps) {
      const { mediaId, getMedia } = this.props;
      if (mediaId && mediaId !== prevProps.mediaId) {
        getMedia({ id: mediaId });
      }
    }

    render() {
      const { getMedia, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const mediaId = ownProps.mediaId; // eslint-disable-line
    const {
      isFetching: isFetchingMedia = false,
      creatorId: mediaCreatorId = "",
      dateCreation: mediaDateCreation = "",
      type: mediaType = "",
      data: mediaData = "",
      groupId: mediaGroupId = "",
      errorCode: mediaErrorCode = ""
    } = mediasSelectors.getMediaById(state, mediaId) || {};
    return {
      isFetchingMedia,
      mediaId,
      mediaCreatorId,
      mediaDateCreation,
      mediaType,
      mediaData,
      mediaGroupId,
      mediaErrorCode
    };
  };

  const mapDispatchToProps = dispatch => ({
    getMedia: payload => dispatch(mediasActions.getMediaRequest(payload))
  });

  WithMedia.propTypes = {
    mediaId: PropTypes.string.isRequired,
    getMedia: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithMedia);
};

export default withMedia;
