import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native-web'
import  Header  from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import {POSTS} from '../data/posts'
import BottomTabs, { BottomTabIcons } from '../components/home/BottomTabs'



const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation = {navigation}/> 
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post = {post} key={index}/>
        ))}
      
      </ScrollView>
      <BottomTabs icons={ BottomTabIcons } />
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default HomeScreen