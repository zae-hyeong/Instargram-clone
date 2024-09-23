import { Image, StyleSheet, Platform, View, Text, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logo}>
        <Text>Logo</Text>
        <View>
          <Button title="Direct Message" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  logo: {
    display: "flex",
  },
});
