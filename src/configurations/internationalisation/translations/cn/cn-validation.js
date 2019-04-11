const cnValidation = {
  username: { missing: "", invalid: "" },
  email: { missing: "", invalid: "" },
  password: { missing: "", invalid: "", tooeasy: "", dontmatch: "" },
  groupName: { missing: "" },
  discoverability: { missing: "" },
  modules: { missing: "" },
  theme: { missing: "" }
};

export default cnValidation;
