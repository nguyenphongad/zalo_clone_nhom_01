import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ContainerAuthPages = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Đăng nhập")}
                    style={[styles.buttonNavigate, styles.btnLogin]}
                >
                    <Text style={[styles.textBtnNavi, styles.textLogin]}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Đăng ký")}
                    style={styles.buttonNavigate}
                >
                    <Text style={styles.textBtnNavi}>ĐĂNG KÝ</Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ContainerAuthPages;


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        padding:50
    },
    buttonNavigate: {
        width: 200,
        padding: 20,
        backgroundColor: "#eaeaea",
        borderRadius: 15,
        marginTop: 20
    },
    textBtnNavi: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center"
    },

    btnLogin: {
        backgroundColor: "#ff6666"
    },
    textLogin: {
        color: "#fff"
    }
})