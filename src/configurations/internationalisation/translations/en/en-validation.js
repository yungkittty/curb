const enValidation = {
  username: {
    missing: "Missing username",
    invalid: "Must be 4 to 30 characters long."
  },
  email: { missing: "Missing mail address", invalid: "Invalid mail address" },
  password: {
    missing: "Missing password",
    invalid: "Must be 6 to 64 characters long",
    tooeasy: "Your password is too easy to guess",
    dontmatch: "Passwords don't match"
  }
};

export default enValidation;
