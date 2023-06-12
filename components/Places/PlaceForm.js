import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocatinPicker";
import Button from "../UI/Button";
import { place } from "../../models/place";

const PlaceForm = ({onCreatePlace}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);
  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  function savePlaceHandler() {
    const placeDate = new place 
    onCreatePlace()
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 10,
    borderColor: Colors.primary700,
    borderWidth: 1,
    color: "black",
    paddingHorizontal: 4,
    paddingVertical: 8,
    marginVertical: 8,
    fontSize: 16,
    backgroundColor: Colors.primary100,
  },
  form: { flex: 1, padding: 24 },
  label: { fontWeight: "bold", marginBottom: 4, color: Colors.primary500 },
});
