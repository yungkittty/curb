import Geolocation from "@react-native-community/geolocation";

const requestLocation = callback => {
  Geolocation.setRNConfiguration({ authorizationLevel: "always" });
  Geolocation.requestAuthorization();
  return Geolocation.getCurrentPosition(callback);
};

export default requestLocation;
