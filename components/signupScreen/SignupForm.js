import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";
import { Validator } from "email-validator";

const SignupForm = () => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 6 characters"),
  });

  return (
    <View style={style.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={SignupFormShema}
        validateOnMount={true}
      >
        {{ handleChange, handleBlur, handleSubmit, values, isValid }}
        <>
          <View
            style={[
              styles.inputField,
              {
                borderColor:
                  values.email.length < 1 || Validator.validate(values.email)
                    ? "#ccc"
                    : "red",
              },
            ]}
          >
            <TextInput
                placeholderTextColor="#444"
                placeholder="email"
                autoCapitalise="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

          </View>
          <View
            style={[

              styles.inputField,
              {
                borderColor:
                  values.username.length  || values.username.length
                    ? "#ccc"
                    : "red",
              },
            ]}
          >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalise="none"
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              <View
            style={[

              styles.inputField,
              {
                borderColor:
                  values.password.length  || values.password.length
                    ? "#ccc"
                    : "red",
              },
            ]}
          >

          </View>

                <TextInput
                placeholderTextColor="#444"
                placeholder="password"
                autoCapitalise="none"
                secureTextEntry ={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />

              <Pressable titleSize={20}
             style={styles.button}
             onPress ={handleSubmit}
              >

              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>already have an accout? </Text>
              <TouchableOpacity>
                <Text style={{ color: "#6BB0F5" }}> Log in </Text>
              </TouchableOpacity>
            </View>
        </>
        )}

      </Formik>
    </View>
  )
}



export default SignupForm;
