import { PermissionsAndroid } from "react-native";

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: "Geolocation",
      message: "Curb App needs access to your location to show your position on the map.",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the geolocation");
    }
  } catch (err) {
    console.warn(err);
  }
}

export default requestLocationPermission;
