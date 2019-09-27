const enValidation = {
  username: {
    missing: "Missing username",
    invalid: "Must be 4 to 30 characters long"
  },
  email: {
    missing: "Missing mail address",
    invalid: "Invalid mail address",
    ACCOUNTS_NOT_FOUND: "No account found with this mail address"
  },
  password: {
    missing: "Missing password",
    invalid: "Must be 6 to 64 characters long",
    tooeasy: "Your password is too easy to guess",
    dontmatch: "Passwords don't match"
  },
  resetPassCode: { ACCOUNTS_CODE_DIFFERENT: "The validation code is not valid" },
  groupName: {
    missing: "Missing group name",
    invalid: "Must be 4 to 30 characters long"
  },
  groupCategory: {
    missing: "Missing category"
  },
  discoverability: {
    missing: "You must choose an option"
  },
  description: {
    missing: "You must enter a short description"
  },
  modules: {
    missing: "You must choose at least one module"
  },
  theme: {
    missing: "You must choose a theme"
  }
};

export default enValidation;
