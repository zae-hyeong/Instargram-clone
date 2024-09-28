import MainHeader from "@/components/main/header/MainHeader";
import { ScrollView, View } from "react-native";
import StoryView from "@/components/main/storyView/StoryView";
import PostView from "@/components/post/PostView";

export default function MainScreen() {
  return (
    <ScrollView>
      <MainHeader></MainHeader>
      <StoryView></StoryView>
      <PostView></PostView>
    </ScrollView>
  );
}
