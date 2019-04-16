const mediasSelectors = {};

mediasSelectors.getMediaById = (state, id) => state.medias.byId[id];

export default mediasSelectors;
