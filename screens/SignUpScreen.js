import { View, Text, View, Image, StyleSheet } from 'react-native'
import React from 'react'

const SignUpScreen = () => (
<View style={StyleSheet.container}>
    <View style={StyleSheet.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
</View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,

    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    }
})

export default SignUpScreen