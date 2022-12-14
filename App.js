import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, Button, Alert, View, Dimensions} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'; //use this hook to easily flip around the 
import WelcomeScreen from './apps/screens/WelcomeScreen';

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

  //console.log(useDeviceOrientation()) // this checks out the the dimesions of the phone device you are working on
  
  return (
    <SafeAreaView  style={styles.container}>
      <View>
        {/* <WelcomeScreen/>  */}
        <View>
           <Text >
               Sabahal Keeerrr Dunia!!!
           </Text>
         </View>
      </View>

    </SafeAreaView>

    ) 
  }

    //////////////////// THIS IS MAINLY TO LEARN ABOUT STYLING AND IN REACT NATIVE //////////////////

    // this is to learn some of the css involved in styling our react-native app
    //this first view is the container that holds all the other containers
    // <View
    //   style={{
    //     backgroundColor: "#fff",
    //     flex: 1,
    //     flexDirection:'row', //places how you want the container to look(horizontal, vertical)
    //     justifyContent: "center", //this aligns items to the main axis (x-axis)
    //     alignItems: 'center', //this aligns item to the secondary axis
    //     alignContent: "center", //aligns the content 
    //     // flexWrap: "wrap",
    //   }}
    // >
    //   <View style={{
    //     backgroundColor: "black",
    //     // flex: 1,
    //     // flexgrow: 2, //works same as just flex
    //     // flexBasis: 100,
    //     height: 100,
    //     width: 100, 
    //     // alignSelf: "center",
    //   }}/>
    //   <View style={{
    //     backgroundColor: "tomato",
    //     // flex: 1,
    //     // flexShrink: 1,
    //     height: 100,
    //     width: 100,
    //     top:25,
    //     bottom: 25,
    //     left: 5,
    //     right: 5,
    //     position: "relative", //by default its relatively positioned, when absolute, its independent of doesnt take part in normal layout
    //   }}/>
    //   <View style={{
    //     backgroundColor: "green",
    //     // flex: 1,
    //     height: 100,
    //     width: 100,
    //   }}/>
    //   <View style={{
    //     backgroundColor: "greenyellow",
    //     // flex: 1,
    //     height: 100,
    //     width: 100,
    //   }}/>
    // </View>

    //////////////////// THIS IS MAINLY TO LEARN ABOUT STYLING AND IN REACT NATIVE //////////////////
  

    ////////////////////// THIS IS INITIALLY TO GET FAMILIAR WITH THE HOW AND WHERE TO LAYOUT STUFF IN REACT NATIVE//////////
    
    //  uncomment the code below to see what learnings are in it

    // <SafeAreaView style={styles.container}>
    //   <View>
    //     <Text >
    //         Sabahal Keeerrr Dunia!!!
    //     </Text>
    //   </View>
    //    {/* below we can import an image and add a few props to it e.g, Highlight, touchableOpacity */}
    //    {/* <TouchableOpacity onPress={onPress}>
    //     <Image 
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300"
    //       }}

    //     />
    //    </TouchableOpacity> */}
    //   <Button
    //    title='2 button alert' 

    //    onPress={()=> // this adds a box alert to be able to add and submit a message
    //     Alert.prompt("My title", "my message", (text) => console.log(text))
    //    } 
    //    color="red" 
    //   />
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    ////////////////////// THIS IS INITIALLY TO GET FAMILIAR WITH THE HOW AND WHERE TO LAYOUT STUFF IN REACT NATIVE//////////

// const styleContainer = { backgroundColor: "pink"}; // this style overides the previous style.. we add it as an array to the safeArea view style

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    width: "50%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center"
  },
}); 