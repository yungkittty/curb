import offlineDefaultConfiguration from "@redux-offline/redux-offline/lib/defaults";
import offlineEffect from "./offline-effect";
import offlineDiscard from "./offline-discard";
import offlineWhitelist from "./offline-whitelist";

const configureOffline = () => ({
  ...offlineDefaultConfiguration,
  effect: offlineEffect,
  discard: offlineDiscard,
  persistOptions: { whitelist: offlineWhitelist }
});

export default configureOffline;
