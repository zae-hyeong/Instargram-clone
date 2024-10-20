import { ScrollView, Text, StyleSheet } from "react-native";
import Post from "./Post";

import createRandomPost, { PostI, Post as PostClass } from "./PostFakerData";
import { fakerDE as faker } from "@faker-js/faker";
import { useRef, useEffect, useState } from "react";




export default function PostView() {
  let [posts, setPosts] = useState<PostClass[]>([]);

  useEffect(() => {
    const dummyPost1 = new PostClass();

    // posts.current = faker.helpers.multiple(createRandomPost, {
    //   count: 5,
    // });
    setPosts([dummyPost1, createRandomPost(), createRandomPost(), createRandomPost(), createRandomPost(), createRandomPost()]);
    console.log(posts);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {posts && posts.map((post) => (
        <Post post={post} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});
