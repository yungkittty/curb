const mediasSelectors = {};

mediasSelectors.isMediasPosting = state => state.medias.isPosting;

mediasSelectors.getMediaById = (state, id) => state.medias.byId[id];

export default mediasSelectors;
