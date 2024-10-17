import { Image, View, Text, StyleSheet } from "react-native";


import { ImageSlider } from "react-native-image-slider-banner";
import { PostI } from "./PostFakerData";

export default function Post({post}: {post: PostI}) {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image style={styles.profileImg} source={{uri: post.profileImg}} />
        <Text style={styles.uploaderId}>{post.uploaderId}</Text>
      </View>
      <View style={styles.postImgContainer}>
        {/* <ImageSlider
          data={[
            { img: dummyImg1 },
            { img: dummyImg2 },
            { img: dummyImg3 },
            { img: dummyImg4 },
            { img: dummyImg5 },
            { img: dummyImg6 },
          ]}
          localImg={true}
          autoPlay={true}
          timer={1000}
          onClick={() => {}}
          
          previewImageContainerStyle={styles.postImg}
        ></ImageSlider> */}
        <Image style={styles.postImg} source={{uri: post.imgs[0]}} />
      </View>
      <View style={styles.postContentContainer}>
        <View></View>
        <View>
          <Text style={styles.uploaderId}>{post.uploaderId}</Text>
          <Text>{post.content}</Text>
        </View>
      </View>
    </View>
  );
}

const felxCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 300,
  },

  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },

  uploaderId: {
    fontWeight: 600,
  },

  postHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 80,
    padding: 20,
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
    aspectRatio: 2/1,
  },

  postContentContainer: {},
});
