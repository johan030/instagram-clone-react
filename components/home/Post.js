import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/ffffff/external-like-feedback-kmg-design-detailed-outline-kmg-design.png",
    likedImageUrl:
      "https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/4a90e2/external-like-feedback-kmg-design-detailed-outline-kmg-design.png",
  },
  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/dotty/80/ffffff/comment-discussion.png",
  },
  {
    name: "Share",
    imageUrl: "https://img.icons8.com/glyph-neue/64/ffffff/share.png",
  },
  {
    name: "Save",
    imageUrl: "https://img.icons8.com/ios/50/ffffff/save--v1.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

//POST HEADER

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: 700 }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}> ... </Text>
  </View>
);

// POST IMAGE

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
// POST FOOTER

const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[0].imageUrl}
      ></Icon>
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[1].imageUrl}
      ></Icon>
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[2].imageUrl}
      ></Icon>
    </View>

    <View>
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[3].imageUrl}
      ></Icon>
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 10 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

// if more than 1 comment then display the word all or nothing
//if more than 1 comment then display the word comments if not display comment
// !!post.comments.length &&  conditional render . if comment exist then display else hide
const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {post.comments.length && (
      <Text style={{ color: "gray" }}>
        View{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments " : "comment"}
      </Text>
    )}
  </View>
);

//what the fuck is this <> </>
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: " 600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "#ff8501",
  },

  footerIcon: {
    width: 33,
    height: 33,
  },

  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
