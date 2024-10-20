import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";
import { PostI } from "./PostFakerData";
import { useState } from "react";

export default function Post({ post }: { post: PostI }) {
  const [viewPostContent, setViewPostContent] = useState<boolean>(false);

  const contentViewHandler = () => {
    setViewPostContent(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image style={styles.profileImg} source={{ uri: post.profileImg }} />
        <Text style={styles.uploaderId}>{post.uploaderId}</Text>
      </View>
      <View style={styles.postImgContainer}>
        {/* <ImageSlider
          data={
            post.imgs.map((imgUrl) => {
              return { img: imgUrl };
          })}

          localImg={true}
          autoPlay={true}
          timer={1000}
          onClick={() => {}}
          
          previewImageContainerStyle={styles.postImg}
        /> */}
        <Image style={styles.postImg} source={{ uri: post.imgs[0] }} />
      </View>
      <View style={styles.postContentContainer}>
        <View style={styles.postReactionContainer}>
          <View>
            <Text>{post.numOfLike}</Text>
          </View>
          <View>
            <Text>{post.numOfComment}</Text>
          </View>
        </View>
        <View >
          <Text>
            <Text style={styles.uploaderId}>{post.uploaderId}</Text>
            {viewPostContent ? (
              <Text>{post.content}</Text>
            ) : (
              <Pressable style={{}} onPress={contentViewHandler}>
                <Text>
                  {post.content.substring(0, 100)}{" "}
                  <Text style={styles.postAssistText}>더보기</Text>
                </Text>
              </Pressable>
            )}
          </Text>
          <Pressable>
            <Text style={styles.postAssistText}>댓글 모두 보기</Text>
          </Pressable>
          <Text style={styles.postDate}>
            {post.uploadBefore.getMonth()}월 {post.uploadBefore.getDate()}일
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  container: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },

  uploaderId: {
    fontWeight: 600,
    paddingRight: 8,
  },

  postHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 80,
    padding: 20,
  },

  postReactionContainer: {
    display: "flex",
    flexDirection: "row",
  },

  postImgContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },

  postImg: {
    width: "100%",
    aspectRatio: 2 / 1,
  },

  postContentContainer: {
    padding: 12,
  },

  postAssistText: {
    fontSize: 12,
    color: "gray",
  },

  postDate: {
    fontSize: 10,
    color: "gray",
  },
});
