import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.form}>
      <View >
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker /> 
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
