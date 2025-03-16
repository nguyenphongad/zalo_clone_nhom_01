import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const ChatDetailScreenIndex = ({ route }) => {
    const { chat } = route.params;
    return (
        <View style={styles.container}>
            {
                chat.messages.map((item) => {
                    return (
                        <View style={[styles.messageContainer, item.sender === "me" ? styles.myMessage : styles.theirMessage]}
                            key={item.time}>
                            <Text style={styles.messageText}>{item.text}</Text>
                            <Text style={styles.messageTime}>{item.time}</Text>
                        </View>
                    )
                })
            }

        </View>
    )
}

export default ChatDetailScreenIndex;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "#fff" },
    messageContainer: { maxWidth: "70%", padding: 10, borderRadius: 10, marginVertical: 5 },
    myMessage: { alignSelf: "flex-end", backgroundColor: "#dcf8c6" },
    theirMessage: { alignSelf: "flex-start", backgroundColor: "#f1f1f1" },
    messageText: { fontSize: 16 },
    messageTime: { fontSize: 12, textAlign: "right", color: "#666", marginTop: 5 }
});