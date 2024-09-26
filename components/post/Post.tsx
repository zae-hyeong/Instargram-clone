import { View, Text, StyleSheet } from 'react-native';

export default function Post() {
  return (
    <View style={styles.container}>
      post
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 300,
  },
});