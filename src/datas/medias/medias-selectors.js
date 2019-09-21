const mediasSelectors = {};

mediasSelectors.isFetchingMedias = state => state.medias.isFetching;

mediasSelectors.getMediasErrorCode = state => state.medias.errorCode;

export default mediasSelectors;
