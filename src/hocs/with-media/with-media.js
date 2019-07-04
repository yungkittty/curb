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

  WithMedia.defaultProps = {
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
