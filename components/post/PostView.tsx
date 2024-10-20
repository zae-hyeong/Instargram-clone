import { View, Text, StyleSheet } from "react-native";
import Post from "./Post";

import createRandomPost, { PostI, Post as PostClass } from "./PostFakerData";
import { fakerDE as faker } from "@faker-js/faker";
import { useRef, useEffect } from "react";

export default function PostView() {
  let posts = useRef<PostClass[]>([]);

  useEffect(() => {
    // posts.current = faker.helpers.multiple(createRandomPost, {
    //   count: 5,
    // });
    posts.current = [createRandomPost(), createRandomPost(), createRandomPost(), createRandomPost(), createRandomPost()];
  }, [posts.current]);

  return (
    <View style={styles.container}>
      {posts.current.map((post) => (
        <Post post={post} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});
