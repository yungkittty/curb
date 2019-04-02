const enValidation = {
  username: {
    missing: "Missing username",
    invalid: "Must be 4 to 20 characters long. Authorized characters: . _ -"
  },
  email: { missing: "Missing mail address", invalid: "Invalid mail address" },
  password: {
    missing: "Missing password",
    invalid: "Must have 1 letter, 1 number, and be 6 to 32 characters long",
    dontmatch: "Passwords don't match"
  }
};

export default enValidation;
