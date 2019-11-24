import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";

async function requestLocation(callback) {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (!granted === PermissionsAndroid.RESULTS.GRANTED) return;
    return Geolocation.getCurrentPosition(callback);
  } catch (err) {
    return false;
  }
}

export default requestLocation;
