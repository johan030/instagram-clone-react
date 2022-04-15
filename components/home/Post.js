import { View, Text, Image } from 'react-native'
import React from 'react'
import { Divider} from 'react-native-elements'

const Post = ({post}) => {
  return (
    <View style = {{ marginBottom: 30 }}>
        <Divider width={1} orientation ='vertical' />
        <PostHeader post={post} />
    </View>
  )
}

const PostHeader =( {post }) => (
    <View style = {{flexDirection: 'row', justifyContent: "space-between", margin: 5, alignItems: 'center'}} >
        <View>
            <Image />
            <Text></Text>
        </View>
    </View>
)

export default Post