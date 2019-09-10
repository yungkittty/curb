import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mediasActions, mediasSelectors } from "../../datas/medias";

const withMedia = WrappedComponent => {
  class WithMedia extends React.Component {
    componentDidMount() {
      const {
        // eslint-disable-line
        shouldFetch,
        isFetchingMedia,
        mediaId,
        getMedia
      } = this.props;
      if (shouldFetch && !isFetchingMedia && mediaId) {
        getMedia({ id: mediaId });
      }
    }

    componentDidUpdate(prevProps) {
      const {
        // eslint-disable-line
        shouldFetch,
        isFetchingMedia,
        mediaId,
        getMedia
      } = this.props;
      if (shouldFetch && !isFetchingMedia && mediaId && mediaId !== prevProps.mediaId) {
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
    const media = mediasSelectors.getMediaById(state, mediaId);
    if (!media) return { mediaId };
    const {
      isFetching: isFetchingMedia,
      creatorId: mediaCreatorId,
      dateCreation: mediaDateCreation,
      type: mediaType,
      data: mediaData,
      groupId: mediaGroupId,
      errorCode: mediaErrorCode
    } = media;
    return {
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

  WithMedia.defaultProps = {
    shouldFetch: true,
    isFetchingMedia: false,
    mediaId: "",
    mediaCreatorId: "",
    mediaDateCreation: "",
    mediaType: "",
    mediaData: "",
    mediaGroupId: "",
    mediaErrorCode: ""
  };

  WithMedia.propTypes = {
    shouldFetch: PropTypes.bool,
    isFetchingMedia: PropTypes.bool,
    mediaId: PropTypes.string,
    mediaCreatorId: PropTypes.string,
    mediaDateCreation: PropTypes.string,
    mediaType: PropTypes.string,
    mediaData: PropTypes.string,
    mediaGroupId: PropTypes.string,
    mediaErrorCode: PropTypes.string,
    getMedia: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithMedia);
};

export default withMedia;
