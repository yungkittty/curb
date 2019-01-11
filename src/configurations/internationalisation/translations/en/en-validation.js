const enValidation = {
  username: { missing: "Missing username" },
  email: { missing: "Missing mail address" },
  password: {
    missing: "Missing password",
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
