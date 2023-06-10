import { Alert, StyleSheet, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

function LocationPicker() {
  const [locationInformationInformation, requestPermission] =
    useForegroundPermissions();
  async function verifyPermissions() {
    if (
      locationInformationInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permisssionResponse = await requestPermission();

      return permisssionResponse.granted;
    }
    if (locationInformationInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission!!",
        "you need to grant Location permission to use this app"
      );
      return false;
    }
    return true;
  }
  async function getLocationhandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location);
  }
  function pickOnMapHandler() {}
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationhandler}>
          Locate a User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}
export default LocationPicker;
const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});