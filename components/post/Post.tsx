import { Image, View, Text, StyleSheet } from "react-native";
import dummyImg1 from "@/images/dummyPostImg/insta-dummy-post-img-1.jpg";
import dummyImg2 from "@/images/dummyPostImg/insta-dummy-post-img-2.jpg";
import dummyImg3 from "@/images/dummyPostImg/insta-dummy-post-img-3.jpg";
import dummyImg4 from "@/images/dummyPostImg/insta-dummy-post-img-4.jpg";
import dummyImg5 from "@/images/dummyPostImg/insta-dummy-post-img-5.jpg";
import dummyImg6 from "@/images/dummyPostImg/insta-dummy-post-img-6.jpg";
import dummyProfileImg from "@/images/dummyPostImg/dummy-post-profile-img.jpg";
const dddimg = require('@/images/dummyPostImg/insta-dummy-post-img-1.jpg')
import { ImageSlider } from "react-native-image-slider-banner";

const dummyPostData = {
  profileImg: dummyProfileImg,
  uploaderId: "kangnam11",
  imgs: [dummyImg1, dummyImg2, dummyImg3, dummyImg4, dummyImg5, dummyImg6],
  numOfLike: 8814,
  numOfComment: 327,
  uploadBefore: "2달 전",
  content: `요즘 제일 🔥🔥핫하다는🔥🔥 100인의 요리사들이 펼치는 치열한 요리 서바이벌 #넷플릭스 #흑백요리사 👨‍🍳

이미 대중들에게 잘 알려진 백수저 셰프들부터 오직 맛으로 승부한 흑수저 셰프들까지 🍴 흑백요리사 출연진 70명이 운영or요리하는 식당 리스트 싹~ 모아왔다✨✨

@@저장해두고 도장 깨기 고고!

*백수저_최현석 : 서울시 강남구 쵸이닷 / 서울시 성동구 중앙감속기 / 서울 성동구 중앙가속기
*백수저_박준우 : 서울시 종로구 / 오쁘띠베르
*흑수저_일식타짜 : 서울시 중랑구 세이지 & 스낵바세이지 &야키니쿠세이지 / 성북구 후후세이지
*흑수저_코리안 타코킹 : 서울시 성동구 / 엘몰리노
*백수저_방기수 : 서울시 강북구 깃든으로 정정합니다

-

#서울맛집 #서울맛집추천 #서울데이트 #서울가볼만한곳
#제주맛집 #미국맛집 #광주맛집 #양산맛집 #강릉맛집 #부여맛집 #전주맛집 #수원맛집 #홍콩맛집 #칠곡맛집 #클쓰픽`,
};

export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image style={styles.profileImg} source={dummyProfileImg} />
        <Text style={styles.uploaderId}>{dummyPostData.uploaderId}</Text>
      </View>
      <View style={styles.postImgContainer}>
        <ImageSlider
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
        ></ImageSlider>
      </View>
      <View style={styles.postContentContainer}>
        <View></View>
        <View>
          <Text style={styles.uploaderId}>{dummyPostData.uploaderId}</Text>
          <Text>{dummyPostData.content}</Text>
        </View>
      </View>
    </View>
  );
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
  },

  postImg: {
    width: "100%",
  },

  postContentContainer: {},
});
