import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, Button, Alert, View} from 'react-native';

export default function App() {

  //this is to handle the alert button and customize to my own need 

  // const createTwoButtonAlert = ()=>{
  //   Alert.alert(
  //     "My Title", 
  //     "write message here....",
  //     [
  //       {
  //         text: "cancel",
  //         onPress: ()=> console.log("cancel Pressed!!"),
  //         style: "cancel"
  //       },
  //       {
  //         text: "ok",
  //         onPress: ()=> console.log("ok Pressed!!")
  //       }
  //     ],
  //   )
  // }

  return (
    <SafeAreaView style={[styles.container, styleContainer]}>
      <View>
        <Text>
        Learning React-Native
        </Text>
        
      </View>
      <Text >
          Sabahal Keeerrr Dunia!!!
      </Text>
       {/* below we can import an image and add a few props to it e.g, Highlight, touchableOpacity */}
       {/* <TouchableOpacity onPress={onPress}>
        <Image 
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}

        />
       </TouchableOpacity> */}
      <Button
       title='2 button alert' 

       onPress={()=> // this adds a box alert to be able to add and submit a message
        Alert.prompt("My title", "my message", (text) => console.log(text))
       } 
       color="red" 
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styleContainer = { backgroundColor: "pink"}; // this style overides the previous style.. we add it as an array to the safeArea view style

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
}); 