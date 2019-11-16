const postSelectors = {};

postSelectors.isFetchingMedias = state => state.medias.isFetching;

postSelectors.getMediaById = (state, id) => state.medias.byId[id];

postSelectors.getMediasErrorCode = state => state.medias.errorCode;

export default postSelectors;
