const postSelectors = {};

postSelectors.isFetchingPost = state => state.post.isFetching;

postSelectors.getPostById = (state, id) => state.post.byId[id];

postSelectors.getPostErrorCode = state => state.post.errorCode;

export default postSelectors;
