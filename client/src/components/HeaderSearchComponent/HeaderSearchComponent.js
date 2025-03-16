import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HeaderSearchComponent = () => {
    return (
        <View style={styles.headerContainer}>
            <Text>HeaderSearchComponent</Text>
        </View>
    )
}

export default HeaderSearchComponent


const styles = StyleSheet.create({
    headerContainer:{
        width:'100%',
        height:50,
        backgroundColor:"#ffffff"
    }
})