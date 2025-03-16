import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const ChatsPage = () => {
    return (
        <View  style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <Text>ChatsPage</Text>
        </View>
    )
}

export default ChatsPage


const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        backgroundColor:"#fff"
    },

    text: {
        color: '#ffffff',
        textAlign: "center"
    },
});