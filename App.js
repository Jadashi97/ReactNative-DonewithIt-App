import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';

export default function App() {

  const onPress = ()=>{
    console.log("see the opacity!!")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text >
        Sabahal Keeerrr Dunia!!!
       </Text>
       <TouchableOpacity onPress={onPress}>
        <Image 
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}

        />
       </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});