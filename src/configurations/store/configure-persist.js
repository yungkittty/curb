import persistStorage from "redux-persist/lib/storage";
import persistWhitelist from "./persist-whitelist";

const configurePersist = () => ({
  key: "root",
  storage: persistStorage,
  whitelist: persistWhitelist
});

export default configurePersist;
