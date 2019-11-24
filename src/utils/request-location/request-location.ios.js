import Geolocation from "react-native-geolocation-service";

const requestLocation = callback => {
  Geolocation.setRNConfiguration({ authorizationLevel: "always" });
  Geolocation.requestAuthorization();
  return Geolocation.getCurrentPosition(callback);
};

export default requestLocation;
