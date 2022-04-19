import { View, Text } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'
import { SafeAreaView } from 'react-native'

const NewPostScreen = () => {
  return (
    <SafeAreaView style = {{ backgroundColor: 'black', flex: 1}}>
        <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen