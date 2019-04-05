const inputRegex = {
  email:
    "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$",
  username: "^((?!\\p{M})(?=[\u0000-\u024F\u1000-\uFFFF]+).){4,30}$",
  password: "^(?=.*\\d)(?=.*[A-Za-z]).{6,64}$"
};

export default inputRegex;
