const postsSelectors = {};

postsSelectors.isFetchingPosts = state => state.posts.isFetching;

postsSelectors.isPostsEnd = (state, groupId) => (state.posts.byGroupId[groupId] || {}).isEnd || false;

postsSelectors.getPostById = (state, groupId, id) => ((state.posts.byGroupId[groupId] || {}).byId || {})[id] || {};

postsSelectors.getPostsAllIds = (state, groupId) => (state.posts.byGroupId[groupId] || {}).allIds || [];

postsSelectors.getPostsErrorCode = state => state.posts.errorCode;

export default postsSelectors;
