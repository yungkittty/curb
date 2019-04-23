const mediasSelectors = {};

mediasSelectors.isMediasPosting = state => state.medias.isPosting;

mediasSelectors.getMediasPostingErrorCode = state => state.medias.errorCode;

mediasSelectors.getMediaById = (state, id) => state.medias.byId[id];

export default mediasSelectors;
