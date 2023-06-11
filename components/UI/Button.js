import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

const Button = ({ onPress, children }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
const styles = StyleSheet.create({
  text: { textAlign: "center", fontSize: 16, color: Colors.primary50 },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    borderRadius: 4,
  },
  pressed: { opacity: 0.7 },
});
