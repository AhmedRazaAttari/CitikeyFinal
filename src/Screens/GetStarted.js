import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native';
import Ellipse from '../assets/Ellipse.png';
import Group41 from '../assets/Group41.png';
import LinearGradient from 'react-native-linear-gradient';

export default GetStarted = ({ navigation }) => {
    return (
        <LinearGradient colors={['#D51B2E', '#6C1381', '#110CC9']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1.3 }} style={{ flex: 1 }}>
            <StatusBar hidden={true}/>
            <Image source={require("../assets/Ellipse.png")} style={{ position: "absolute", top: -90, left: -90 }} />
            <Image source={require("../assets/Path.png")} style={{ position: "absolute", right: -60 }} />
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", padding: 20 }}>
                <Text style={{ letterSpacing: 1, marginTop: 50, textAlign: "center", fontFamily: "Roboto", fontSize: 33, color: "white" }}>WELCOME TO CITIKEY</Text>
                <Image source={require("../assets/Group41.png")} />

                <TouchableOpacity onPress={() => navigation.navigate("Role")}>
                    <View style={{ width: Dimensions.get("screen").width - 100, height: 50, backgroundColor: "#e4f2f2", borderRadius: 40, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Roboto", fontSize: 21, color: "#3312AC" }}>GET STARTED</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: -20 }} onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontFamily: "Roboto", fontSize: 14, color: "white", textAlign: "center" }}>Already have an account? SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
} 