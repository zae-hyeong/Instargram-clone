import { View, Text, StyleSheet } from "react-native";

export default function StoryView() {
  return (
    <View style={styles.storyContainer}>
      <Text>StoryView</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  storyContainer: {
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 50,
  },
});
