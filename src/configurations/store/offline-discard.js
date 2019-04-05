// https://github.com/redux-offline/redux-offline/blob/develop/docs/recipes/customize-requests.md#example-using-axios

const offlineDiscard = error => {
  const {
    request,
    response,
    response: { status }
  } = error;
  if (!request) throw error;
  if (!response) return false;
  return status >= 400 && status < 500;
};

export default offlineDiscard;
