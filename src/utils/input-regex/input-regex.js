const inputRegex = {
  email:
    "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$",
  username: "^(?=(?![0-9])?[A-Za-z0-9]?[._-]?[A-Za-z0-9]+).{4,20}$",
  password: "^(?=.*\\d)(?=.*[A-Za-z]).{6,32}$"
};

export default inputRegex;
