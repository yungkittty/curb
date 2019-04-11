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
  },
  groupName: {
    missing: "Missing group name"
  },
  discoverability: {
    missing: "You must choose an option"
  },
  modules: {
    missing: "You must choose at least one module"
  },
  theme: {
    missing: "You must choose a theme"
  }
};

export default enValidation;
