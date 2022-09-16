import React from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <View>
            <ImageBackground
            styles = {styles.image}
            source={require("../assets/chair.jpg")}
            resizeMode="cover"
            >
            </ImageBackground>
        </View>
            // <View style={styles.loginButton}></View>
    );
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        justifyContent: "center",
    },

    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    }
})

export default WelcomeScreen;