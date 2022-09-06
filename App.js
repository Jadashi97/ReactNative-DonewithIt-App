import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() {

  const handlePress = () => console.log("we just got clicked!!")

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} >
        Sabahal Keeerrr Dunia!!! I am going to make it, get a tech job by the beginning of next year. no excuses!!
       </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});