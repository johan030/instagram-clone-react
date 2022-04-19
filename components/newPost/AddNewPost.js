import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = () => (
<View style={ styles.container }>
    <Header />
    <FormikPostUploader />
</View>

)

const Header = () => (
    <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/50/ffffff/double-left.png",
        }}
        style={{ width: 30, height: 30 }}
      />
   
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignitems: "center",
  },

  headerText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 20,
      marginRight: 25,

  },
});
export default AddNewPost;
