import Geolocation from "react-native-geolocation-service";

const requestLocationPermission = () => {
  Geolocation.setRNConfiguration({ authorizationLevel: "always" });
  Geolocation.requestAuthorization();
  return true;
};

export default requestLocationPermission;
