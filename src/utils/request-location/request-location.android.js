import { PermissionsAndroid } from "react-native";
import Geolocation from "@react-native-community/geolocation";

async function requestLocation(callback) {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (!granted === PermissionsAndroid.RESULTS.GRANTED) return;
    return Geolocation.getCurrentPosition(callback); // eslint-disable-line
  } catch (err) {
    return false; // eslint-disable-line
  }
}

export default requestLocation;
