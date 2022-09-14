import React from 'react';
import { ImageBackground, StyleSheet} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        styles = {styles.background}
        source={require("apps/assets/background.jpg")}
        ></ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1
    }   
})

export default WelcomeScreen;