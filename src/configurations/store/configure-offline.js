import offlineDefaultConfiguration from "@redux-offline/redux-offline/lib/defaults";
import offlineWhitelist from "./offline-whitelist";

const configureOffline = () => ({
  ...offlineDefaultConfiguration,
  persistOptions: { whitelist: offlineWhitelist }
});

export default configureOffline;
