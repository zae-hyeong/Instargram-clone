import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions 
} from "react-native";

export default function MainHeader() {
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.logoContainer}>
        <Link href={"/"}>
          <Image
            style={styles.logoImg}
            source={require("@/images/Instagram-logo.png")}
          />
        </Link>
      </Pressable>
      <Pressable>
        <View>
          <Link href={"/DirectMessage"}>DM</Link>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
  },
  logoContainer: {
    display: "flex",
  },
  logoImg: {
    height: 45,
    width: 80,
  },
});