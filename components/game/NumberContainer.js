import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constans/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 12,
    borderColor: Colors.accent500,
    padding: 23,
    borderRadius: 23,
    margin: 24,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
