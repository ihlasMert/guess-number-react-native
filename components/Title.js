import { Text, StyleSheet } from 'react-native';
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#F79327",
    textAlign: 'center',
    borderWidth: 2,
    borderColor: "#F79327",
    padding: 22,
    paddingTop:23,
    marginTop:23
  },
});