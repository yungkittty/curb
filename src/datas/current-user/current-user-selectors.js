const currentUserSelectors = {};

currentUserSelectors.getCurrentUserId = state => state.currentUser.id;

currentUserSelectors.getCurrentUserToken = state => state.currentUser.token;

currentUserSelectors.getCurrentUserRefreshToken = state => state.currentUser.refreshToken;

currentUserSelectors.hasCurrentUserSignedIn = state => !!(state.currentUser.id && state.currentUser.token);

export default currentUserSelectors;
