const enValidation = {
  username: {
    missing: "Missing username",
    invalid: "Must be 4 to 30 characters long."
  },
  email: { missing: "Missing mail address", invalid: "Invalid mail address" },
  password: {
    missing: "Missing password",
    invalid:
      "Must include at least 1 letter, 1 number, and be 6 to 64 characters long",
    dontmatch: "Passwords don't match"
  }
};

export default enValidation;
