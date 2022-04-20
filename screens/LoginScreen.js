import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm';

const INSTAGRAM_LOGO = 'https://img.icons8.com/color/48/000000/instagram-new--v1.png';

const LoginScreen = () => (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
      </View>
      <LoginForm />
    </View>
  )



  const styles = StyleSheet.create ({
      container : {
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 50,
          paddingHorizontal: 13,
      },
      logoContainer: {
          alignItems: 'center',
          marginTop: 60,
      },
  })
export default LoginScreen