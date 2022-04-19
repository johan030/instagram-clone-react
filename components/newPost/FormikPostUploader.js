import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const PLACEHOLDER_IMG = "https://img.icons8.com/ios/50/ffffff/ios-logo.png";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is reaquired"),
  caption: Yup.string().max(2200, "caption has reached the character limit"),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState("PLACEHOLDER_IMG");
  return (
    // the form came here
    <Formik
      initialValues={{
        caption: "",
        imageUrl: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: PLACEHOLDER_IMG,
              }}
              style={{
                width: 100,
                height: 100,
              }}
            />
            <TextInput
              style={{
                color: "white",
                fontSize: 20,
              }}
              placeholder="write a caption"
              placeholderTextColor="gray"
              multiline={true}
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
            />
          </View>
          <TextInput
            style={{
              color: "white",
              fontSize: 15,
            }}
            placeholder="enter image url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
