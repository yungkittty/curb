const groupsApi = {
  getGroup: ({ id }) =>
    fetch(`${process.env.REACT_APP_API_URL}/groups/${id}`, {
      method: "GET",
      headers: { Accept: "application/json" }
    })
};

export default groupsApi;
