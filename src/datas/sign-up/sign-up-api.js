const signUpApi = {
  signUp: payload =>
    fetch(`${process.env.REACT_APP_API_URL}/accounts/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
};

export default signUpApi;
