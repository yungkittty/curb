const enValidation = {
  username: { missing: "Missing username" },
  mail: { missing: "Missing mail address" },
  password: {
    missing: "Missing password",
    dontmatch: "Passwords don't match"
  },
  groupName: {
    missing: "Missing group name"
  }
};

export default enValidation;
