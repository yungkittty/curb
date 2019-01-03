const usersApi = {
  getUser: ({ id }) =>
    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
      method: "GET",
      headers: { Accept: "application/json" }
    })
};

export default usersApi;
