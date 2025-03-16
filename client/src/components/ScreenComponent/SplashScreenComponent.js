import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreenComponent = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('ContainerAuthPage');
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} style="dark" />
            <Text style={styles.text}>INTRO</Text>
        </View>
    )
}

export default SplashScreenComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6666',
        padding: 30
    },
    logo: {
        width: "100%",
        objectFit: "contain"
    },
    text: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "700",
    },
});