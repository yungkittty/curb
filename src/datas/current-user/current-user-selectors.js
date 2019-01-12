const currentUserSelectors = {};

currentUserSelectors.getCurrentUserId = state => state.currentUser.id;

currentUserSelectors.getCurrentUserToken = state => state.currentUser.token;

currentUserSelectors.getCurrentUserRefreshToken = state => state.currentUser.refreshToken;

export default currentUserSelectors;
