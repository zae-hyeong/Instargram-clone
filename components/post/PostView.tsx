import { View, Text, StyleSheet } from 'react-native';
import Post from './Post';

export default function PostView() {
  return (
    <View style={styles.container}>
      {<Post />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});