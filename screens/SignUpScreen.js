import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import SignupForm from '../components/signupScreen/SignupForm'

const INSTAGRAM_LOGO =
  "https://img.icons8.com/color/48/000000/instagram-new--v1.png";

const SignUpScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <SignupForm />

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
});

export default SignUpScreen;
