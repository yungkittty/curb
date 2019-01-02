const signInApi = {
  signIn: payload =>
    fetch(`${process.env.REACT_APP_API_URL}/accounts/sign-in`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }),
  signOut: token =>
    fetch(`${process.env.REACT_APP_API_URL}/accounts/sign-out`, {
      method: "POST",
      headers: { Authorization: `Bearer${token}` }
    })
};

export default signInApi;
