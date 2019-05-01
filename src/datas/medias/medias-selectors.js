const mediasSelectors = {};

mediasSelectors.isFetchingMedias = state => state.medias.isFetching;

mediasSelectors.getMediaById = (state, id) => state.medias.byId[id];

mediasSelectors.getMediasErrorCode = state => state.medias.errorCode;

export default mediasSelectors;
