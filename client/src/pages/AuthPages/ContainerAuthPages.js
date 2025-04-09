import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import logo_img from "../../../assets/logo_icon_text.jpg"
import { color_main, stylesMixin } from '../../styleMixins/@minxin'

const ContainerAuthPages = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={logo_img} style={styles.logo_image}/>
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
        padding:50,
        backgroundColor:"#fff"
    },
    logo_image:{
        height:270,
        objectFit:"contain",
        marginBottom:60
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
        backgroundColor: color_main,
    },
    textLogin: {
        color: "#fff"
    }
})